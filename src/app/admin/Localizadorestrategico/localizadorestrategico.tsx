import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    google: typeof google;
  }
}

interface Business {
  id: string;
  name: string;
  location: google.maps.LatLng;
  type: string;
  rating: number;
  isPotential: boolean;
}

interface HeatmapData {
  location: google.maps.LatLng;
  weight: number;
}

const MADRID_CENTER = { lat: 40.4168, lng: -3.7038 };
const BUSINESS_TYPES = ['Gastronomía', 'Moda', 'Bar', 'Cafetería', 'Tienda'];

const LocalizadorEstrategico: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [heatmap, setHeatmap] = useState<google.maps.visualization.HeatmapLayer | null>(null);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [selectedType, setSelectedType] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDtlAr_9YisWzgmDW4KTbgEHJIetTmrJN8&libraries=places,visualization,geometry`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      script.onerror = () => setError("Error al cargar Google Maps. Por favor, verifica tu conexión a internet e inténtalo de nuevo.");
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();
  }, []);

  const initMap = () => {
    if (mapRef.current && window.google) {
      try {
        const newMap = new window.google.maps.Map(mapRef.current, {
          center: MADRID_CENTER,
          zoom: 13,
        });
        setMap(newMap);
        initHeatmap(newMap);
      } catch (err) {
        setError("Ocurrió un error al inicializar el mapa. Por favor, recarga la página e inténtalo de nuevo.");
      }
    }
  };

  const initHeatmap = (map: google.maps.Map) => {
    const heatmapLayer = new google.maps.visualization.HeatmapLayer({
      data: [],
      map: map,
    });
    setHeatmap(heatmapLayer);
  };

  const searchBusinesses = () => {
    if (map && selectedType) {
      setLoading(true);
      const service = new google.maps.places.PlacesService(map);
      const request: google.maps.places.PlaceSearchRequest = {
        location: MADRID_CENTER,
        radius: 5000,
        type: selectedType,
        keyword: searchQuery || undefined,
      };

      service.nearbySearch(request, (results, status) => {
        setLoading(false);
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          const newBusinesses: Business[] = results.map(result => ({
            id: result.place_id || '',
            name: result.name || 'Sin nombre',
            location: result.geometry?.location || new google.maps.LatLng(0, 0),
            type: selectedType,
            rating: result.rating || 0,
            isPotential: (result.rating || 0) >= 3,
          }));
          setBusinesses(newBusinesses);
          updateHeatmap(newBusinesses);
        } else {
          setError("No se encontraron negocios. Intenta con otro tipo o ajusta el área de búsqueda.");
        }
      });
    }
  };

  const updateHeatmap = (businesses: Business[]) => {
    if (heatmap) {
      const heatmapData = businesses.map(b => ({
        location: b.location,
        weight: b.rating
      }));
      heatmap.setData(heatmapData);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-black">Localizador Estratégico</h2>
        <p className="text-gray-600">Encuentra ubicaciones potenciales para tu franquicia en Madrid</p>
      </div>
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
          <h3 className="font-bold">Error</h3>
          <p>{error}</p>
        </div>
      )}
      <div className="mb-4 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
        <select 
          className="w-full md:w-auto p-2 border rounded text-black bg-white"
          onChange={(e) => setSelectedType(e.target.value)}
          value={selectedType}
        >
          <option value="">Selecciona un tipo</option>
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Buscar negocios..."
          className="w-full md:w-auto p-2 border rounded text-black bg-white"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button 
          onClick={searchBusinesses} 
          disabled={loading || !selectedType}
          className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          {loading ? 'Buscando...' : 'Buscar negocios'}
        </button>
      </div>
      <div ref={mapRef} className="w-full h-96 mb-4"></div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-black">Negocios encontrados: {businesses.length}</h3>
        <ul className="space-y-2">
          {businesses.map((business) => (
            <li key={business.id} className={`p-2 rounded ${business.isPotential ? 'bg-green-100' : 'bg-red-100'}`}>
              <span className="font-semibold text-black">{business.name}</span>
              <span className="text-gray-700"> - {business.type} - Calificación: {business.rating}</span>
              <span className={`ml-2 ${business.isPotential ? 'text-green-600' : 'text-red-600'} font-bold`}>
                {business.isPotential ? 'Ubicación potencial' : 'No recomendado'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocalizadorEstrategico;
