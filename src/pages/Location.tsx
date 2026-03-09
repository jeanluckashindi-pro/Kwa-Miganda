import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MAPBOX_TOKEN, KWA_MIGANDA_LOCATION } from '../config/mapConfig';
import './Location.css';

declare global {
  interface Window {
    mapboxgl: any;
    MapboxDirections: any;
  }
}

export default function Location() {
  const { t } = useTranslation();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    if (map.current) return;
    if (!mapContainer.current) return;
    
    // Attendre que Mapbox soit chargé
    const initMap = () => {
      if (!window.mapboxgl || !window.MapboxDirections) {
        console.error('❌ Mapbox GL JS or Directions not loaded');
        setTimeout(initMap, 100);
        return;
      }

      console.log('✅ Mapbox GL JS and Directions loaded');
      console.log('Initializing map with token:', MAPBOX_TOKEN);

      try {
        window.mapboxgl.accessToken = MAPBOX_TOKEN;

        map.current = new window.mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [KWA_MIGANDA_LOCATION.longitude, KWA_MIGANDA_LOCATION.latitude],
          zoom: KWA_MIGANDA_LOCATION.zoom,
          pitch: 45,
          bearing: -17.6,
          antialias: true
        });
      } catch (error) {
        console.error('❌ Error creating map:', error);
        return;
      }

      map.current.on('load', () => {
        console.log('✅ Map loaded successfully');
        
        // Ajouter les contrôles natifs (style Google Maps)
        map.current.addControl(new window.mapboxgl.NavigationControl({
          showCompass: true,
          showZoom: true,
          visualizePitch: true
        }), 'bottom-right');
        
        map.current.addControl(new window.mapboxgl.FullscreenControl(), 'bottom-right');
        
        // Ajouter le contrôle de géolocalisation
        const geolocateControl = new window.mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserHeading: true
        });
        
        map.current.addControl(geolocateControl, 'bottom-right');
        
        // Ajouter le contrôle de directions (itinéraire)
        const directions = new window.MapboxDirections({
          accessToken: MAPBOX_TOKEN,
          unit: 'metric',
          profile: 'mapbox/driving-traffic',
          alternatives: true,
          congestion: true,
          controls: {
            inputs: true,
            instructions: true,
            profileSwitcher: true
          },
          interactive: true,
          placeholderOrigin: 'Ma position actuelle',
          placeholderDestination: 'Kwa Miganda Lodge',
          flyTo: false
        });
        
        map.current.addControl(directions, 'top-left');
        
        // Définir automatiquement la destination comme Kwa Miganda
        directions.setDestination([KWA_MIGANDA_LOCATION.longitude, KWA_MIGANDA_LOCATION.latitude]);
        
        // Essayer d'obtenir la position actuelle de l'utilisateur
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const userLocation = [position.coords.longitude, position.coords.latitude];
              directions.setOrigin(userLocation);
              console.log('✅ Position actuelle définie:', userLocation);
            },
            (error) => {
              console.log('ℹ️ Géolocalisation non disponible:', error.message);
            }
          );
        }

        // Charger et ajouter le GeoJSON du Burundi (frontière uniquement)
        fetch('/geojson/burundi.geojson')
          .then(response => response.json())
          .then(data => {
            map.current.addSource('burundi-boundary', {
              type: 'geojson',
              data: data
            });

            map.current.addLayer({
              id: 'burundi-outline',
              type: 'line',
              source: 'burundi-boundary',
              paint: {
                'line-color': '#34a853',
                'line-width': 2,
                'line-opacity': 0.6
              }
            });

            console.log('✅ Burundi boundary loaded');
          })
          .catch(error => console.error('❌ Error loading Burundi GeoJSON:', error));

        // Créer un marqueur simple style Google Maps pour Kwa Miganda
        const el = document.createElement('div');
        el.className = 'custom-marker-pin';
        el.innerHTML = `
          <div class="marker-pin">
            <div class="pin-head"></div>
            <div class="pin-point"></div>
          </div>
          <div class="marker-label">Kwa Miganda Lodge</div>
        `;

        new window.mapboxgl.Marker(el)
          .setLngLat([KWA_MIGANDA_LOCATION.longitude, KWA_MIGANDA_LOCATION.latitude])
          .addTo(map.current);
      });

      map.current.on('error', (e: any) => {
        console.error('❌ Map error:', e);
      });
    };

    initMap();

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
      </div>
    </div>
  );
}
