import { useState, useEffect, useRef } from 'react';
import { Car, PersonStanding, Bike, Search, MapPin, X } from 'lucide-react';
import { MAPBOX_TOKEN, KWA_MIGANDA_LOCATION } from '../config/mapConfig';
import './Location.css';

declare global {
  interface Window {
    mapboxgl: any;
    MapboxDirections: any;
  }
}

export default function Location() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const directions = useRef<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState('driving-traffic');
  const [isSearching, setIsSearching] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isMapLoading, setIsMapLoading] = useState(true);

  const searchLocation = async (query: string) => {
    if (!query || query.length < 3) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    setIsSearching(true);
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${MAPBOX_TOKEN}&limit=5&country=BI`
      );
      const data = await response.json();
      setSearchResults(data.features || []);
      setShowResults(true);
    } catch (error) {
      console.error('Error searching location:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const selectLocation = (feature: any) => {
    if (directions.current) {
      setIsCalculating(true);
      directions.current.setOrigin(feature.center);
      setSearchQuery(feature.place_name);
      setShowResults(false);
      
      // Attendre que l'itinéraire soit calculé
      setTimeout(() => {
        setIsCalculating(false);
      }, 2000);
    }
  };

  const changeProfile = (profile: string) => {
    setSelectedProfile(profile);
    setIsCalculating(true);
    
    if (directions.current) {
      directions.current.setProfile(`mapbox/${profile}`);
      
      // Attendre que l'itinéraire soit recalculé
      setTimeout(() => {
        setIsCalculating(false);
      }, 1500);
    }
  };

  useEffect(() => {
    if (map.current) return;
    if (!mapContainer.current) return;
    
    const initMap = () => {
      if (!window.mapboxgl || !window.MapboxDirections) {
        console.error('❌ Mapbox GL JS or Directions not loaded');
        setTimeout(initMap, 100);
        return;
      }

      console.log('✅ Mapbox GL JS and Directions loaded');

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
        setIsMapLoading(false);
        
        map.current.addControl(new window.mapboxgl.NavigationControl({
          showCompass: true,
          showZoom: true,
          visualizePitch: true
        }), 'bottom-right');
        
        map.current.addControl(new window.mapboxgl.FullscreenControl(), 'bottom-right');
        
        const geolocateControl = new window.mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserHeading: true
        });
        
        map.current.addControl(geolocateControl, 'bottom-right');
        
        directions.current = new window.MapboxDirections({
          accessToken: MAPBOX_TOKEN,
          unit: 'metric',
          profile: 'mapbox/driving-traffic',
          alternatives: true,
          congestion: true,
          controls: {
            inputs: false,
            instructions: true,
            profileSwitcher: false
          },
          interactive: true,
          flyTo: false
        });
        
        map.current.addControl(directions.current, 'bottom-left');
        
        directions.current.setDestination([KWA_MIGANDA_LOCATION.longitude, KWA_MIGANDA_LOCATION.latitude]);
        
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const userLocation = [position.coords.longitude, position.coords.latitude];
              directions.current.setOrigin(userLocation);
              console.log('✅ Position actuelle définie:', userLocation);
            },
            (error) => {
              console.log('ℹ️ Géolocalisation non disponible:', error.message);
            }
          );
        }

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
      {/* Loading overlay */}
      {isMapLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Chargement de la carte...</p>
        </div>
      )}

      <div className="location-map-fullscreen">
        <div ref={mapContainer} className="map-container-main" />
        
        {/* Custom search and transport controls */}
        <div className="custom-directions-panel">
          <div className="search-container">
            <div className="search-input-wrapper">
              <Search className={`search-icon ${isSearching ? 'searching' : ''}`} size={20} />
              <input
                type="text"
                placeholder="Rechercher un lieu de départ..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  searchLocation(e.target.value);
                }}
                onFocus={() => searchResults.length > 0 && setShowResults(true)}
                className="search-input"
                disabled={isSearching}
              />
              {searchQuery && !isSearching && (
                <button
                  className="clear-search"
                  onClick={() => {
                    setSearchQuery('');
                    setSearchResults([]);
                    setShowResults(false);
                  }}
                >
                  <X size={16} />
                </button>
              )}
              {isSearching && (
                <div className="search-loading">
                  <div className="mini-spinner"></div>
                </div>
              )}
            </div>
            
            {showResults && searchResults.length > 0 && !isSearching && (
              <div className="search-results">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="search-result-item"
                    onClick={() => selectLocation(result)}
                  >
                    <MapPin size={16} className="result-icon" />
                    <div className="result-text">
                      <div className="result-name">{result.text}</div>
                      <div className="result-address">{result.place_name}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="transport-modes">
            <button
              className={`transport-btn ${selectedProfile === 'driving-traffic' ? 'active' : ''} ${isCalculating ? 'calculating' : ''}`}
              onClick={() => changeProfile('driving-traffic')}
              disabled={isCalculating}
            >
              <Car size={20} />
              <span>Voiture</span>
            </button>
            <button
              className={`transport-btn ${selectedProfile === 'walking' ? 'active' : ''} ${isCalculating ? 'calculating' : ''}`}
              onClick={() => changeProfile('walking')}
              disabled={isCalculating}
            >
              <PersonStanding size={20} />
              <span>Marche</span>
            </button>
            <button
              className={`transport-btn ${selectedProfile === 'cycling' ? 'active' : ''} ${isCalculating ? 'calculating' : ''}`}
              onClick={() => changeProfile('cycling')}
              disabled={isCalculating}
            >
              <Bike size={20} />
              <span>Vélo</span>
            </button>
          </div>

          {isCalculating && (
            <div className="calculating-overlay">
              <div className="mini-spinner"></div>
              <span>Calcul de l'itinéraire...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
