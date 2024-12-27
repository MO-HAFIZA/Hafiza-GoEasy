import 'leaflet/dist/leaflet.css';import L from 'leaflet';
import { useEffect, useRef } from 'react';

const MapComponent = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        
        if (!mapRef.current) {
            mapRef.current = L.map('map').setView([51.505, -0.09], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapRef.current);
        }

        const getRoute = async (startCoords, endCoords) => {
            const apiKey = '5b3ce3597851110001cf624882c7a95a3c0d48c4a7dfba4518e5f0b5';
            const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${startCoords}&end=${endCoords}`;
            const response = await fetch(url);
            const data = await response.json();
            return data.routes[0].geometry.coordinates;
        };

        
        const start = '8.681495,49.41461';
        const end = '8.687872,49.420318'; 

        getRoute(start, end).then((routeCoordinates) => {
            const latLngs = routeCoordinates.map(coord => [coord[1], coord[0]]); 
            const routeLayer = L.polyline(latLngs, { color: 'blue' });
            routeLayer.addTo(mapRef.current);
            mapRef.current.fitBounds(routeLayer.getBounds());
        }).catch((error) => console.error("Error fetching route data:", error));
    }, []);

    return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default MapComponent;
