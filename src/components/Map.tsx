import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
  borderRadius: "10px",
};

const defaultCenter = { lat: 12.9716, lng: 77.5946 }; // Bangalore

const places = [
  { name: "Rusted Spoon Cafe", lat: 12.9716, lng: 77.5946, category: "cafe" },
  { name: "Book Haven", lat: 12.9756, lng: 77.5986, category: "bookstore" },
  { name: "Craft Corner", lat: 12.9686, lng: 77.5886, category: "crafts" },
  { name: "Grill House", lat: 12.9656, lng: 77.5826, category: "restaurant" }
];

// Category-based marker colors
const getMarkerIcon = (category: string) => {
  const colors: Record<string, string> = {
    cafe: "red",
    bookstore: "blue",
    crafts: "green",
    restaurant: "yellow",
  };
  return `https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_${colors[category] || 'purple'}.png`;
};

const GoogleMapComponent: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBgqHF0VbfYxPhQxu1tpYr8rsH1IpkZY8c", // Replace with your API key
  });

  const [selectedPlace, setSelectedPlace] = useState<{ name: string; lat: number; lng: number } | null>(null);

  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={defaultCenter} zoom={14}>
      {places.map((place, index) => (
        <Marker
          key={index}
          position={{ lat: place.lat, lng: place.lng }}
          icon={getMarkerIcon(place.category)}
          onClick={() => setSelectedPlace(place)}
        />
      ))}

      {selectedPlace && (
        <InfoWindow position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }} onCloseClick={() => setSelectedPlace(null)}>
          <div>
            <h3>{selectedPlace.name}</h3>
            <p>Category: {places.find(p => p.name === selectedPlace.name)?.category}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default GoogleMapComponent;
