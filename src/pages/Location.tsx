import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MAPBOX_TOKEN } from '../config/mapConfig';
import './Location.css';

declare global {
  interface Window {
    mapboxgl: any;
  }
}

export default function Location() {
  const { t } = useTranslation();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    if (map.current) return;
    if (!mapContainer.current) return;
    if (!window.mapboxgl) {
      console.error('Mapbox GL JS not loaded');
      return;
    }

    console.log('✅ Mapbox GL JS loaded');
    console.log('Initializing map with token:', MAPBOX_TOKEN);

    window.mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new window.mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [29.7, -3.3],
      zoom: 10,
      pitch: 45, // Vue oblique 3D
      bearing: -17.6, // Rotation
      antialias: true // Meilleure qualité 3D
    });

    map.current.on('load', () => {
      console.log('✅ Map loaded successfully');
      
      // Ajouter les contrôles natifs
      map.current.addControl(new window.mapboxgl.NavigationControl(), 'top-right');
      map.current.addControl(new window.mapboxgl.FullscreenControl(), 'top-right');
      map.current.addControl(new window.mapboxgl.ScaleControl(), 'bottom-left');
      
      // Ajouter un contrôle de style de carte
      const styleControl = document.createElement('div');
      styleControl.className = 'mapboxgl-ctrl mapboxgl-ctrl-group map-style-control';
      styleControl.innerHTML = `
        <button class="style-btn" data-style="mapbox://styles/mapbox/dark-v11" title="Dark">🌙</button>
        <button class="style-btn" data-style="mapbox://styles/mapbox/streets-v12" title="Streets">🗺️</button>
        <button class="style-btn" data-style="mapbox://styles/mapbox/satellite-streets-v12" title="Satellite">🛰️</button>
      `;
      
      document.querySelector('.mapboxgl-ctrl-top-right')?.appendChild(styleControl);
      
      styleControl.querySelectorAll('.style-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const style = (e.target as HTMLElement).getAttribute('data-style');
          if (style && map.current) {
            map.current.setStyle(style);
          }
        });
      });

      // Charger et ajouter le GeoJSON du Burundi
      fetch('/geojson/burundi.geojson')
        .then(response => response.json())
        .then(data => {
          map.current.addSource('burundi-boundary', {
            type: 'geojson',
            data: data
          });

          map.current.addLayer({
            id: 'burundi-fill',
            type: 'fill',
            source: 'burundi-boundary',
            paint: {
              'fill-color': '#42b72a',
              'fill-opacity': 0.12
            }
          });

          map.current.addLayer({
            id: 'burundi-outline',
            type: 'line',
            source: 'burundi-boundary',
            paint: {
              'line-color': '#42b72a',
              'line-width': 2.5,
              'line-opacity': 0.7
            }
          });

          console.log('✅ Burundi GeoJSON loaded');
        })
        .catch(error => console.error('❌ Error loading Burundi GeoJSON:', error));

      // Charger et ajouter le GeoJSON de Mwaro
      fetch('/geojson/mwaro.geojson')
        .then(response => response.json())
        .then(data => {
          map.current.addSource('mwaro-boundary', {
            type: 'geojson',
            data: data
          });

          map.current.addLayer({
            id: 'mwaro-fill',
            type: 'fill',
            source: 'mwaro-boundary',
            paint: {
              'fill-color': '#b88659',
              'fill-opacity': 0.3
            }
          });

          map.current.addLayer({
            id: 'mwaro-outline',
            type: 'line',
            source: 'mwaro-boundary',
            paint: {
              'line-color': '#b88659',
              'line-width': 3,
              'line-opacity': 0.9
            }
          });

          // Ajouter un label pour Mwaro
          map.current.addSource('mwaro-label', {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [29.70, -3.52]
              },
              properties: {
                name: 'MWARO'
              }
            }
          });

          map.current.addLayer({
            id: 'mwaro-label',
            type: 'symbol',
            source: 'mwaro-label',
            layout: {
              'text-field': ['get', 'name'],
              'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
              'text-size': 16,
              'text-letter-spacing': 0.2
            },
            paint: {
              'text-color': '#b88659',
              'text-halo-color': '#ffffff',
              'text-halo-width': 2.5,
              'text-halo-blur': 1
            }
          });

          console.log('✅ Mwaro GeoJSON loaded');
        })
        .catch(error => console.error('❌ Error loading Mwaro GeoJSON:', error));

      // Créer un marqueur personnalisé pour Kwa Miganda
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.innerHTML = `
        <svg width="40" height="40" viewBox="0 0 24 24" fill="#b88659">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        <div class="marker-label-map">Kwa Miganda</div>
      `;

      new window.mapboxgl.Marker(el)
        .setLngLat([29.7, -3.3])
        .addTo(map.current);
    });

    map.current.on('error', (e: any) => {
      console.error('❌ Map error:', e);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="location-page">
      <div className="location-header-section">
        <h1>{t('location.title')}</h1>
        <p className="location-subtitle">{t('location.howToFind')}</p>
      </div>

      <div className="location-map-fullscreen">
        <div ref={mapContainer} className="map-container-main" />
        
        {/* Panneau d'informations flottant */}
        <div className="floating-info-panel">
          <button className="info-toggle-btn" onClick={() => {
            const panel = document.querySelector('.info-content-panel');
            panel?.classList.toggle('collapsed');
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          </button>
          
          <div className="info-content-panel">
            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div>
                <strong>{t('location.address')}</strong>
                <p>{t('location.addressValue')}</p>
              </div>
            </div>

            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <div>
                <strong>{t('location.phone')}</strong>
                <p>+257 22 XX XX XX</p>
              </div>
            </div>

            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <div>
                <strong>{t('location.email')}</strong>
                <p>contact@kwamiganda.com</p>
              </div>
            </div>

            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <div>
                <strong>{t('location.access')}</strong>
                <p>{t('location.byCar')}</p>
                <p>{t('location.airportTransfer')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
