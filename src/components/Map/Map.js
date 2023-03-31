import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ExpandedCard from '../travelCard/expandedCard';

const Map =(props)=>{
//   constructor(props) {
//     super(props);
//     this.state = {
//       map: null,
//       locations: [
//         { name: 'Location A', latlng: [51.505, -0.09] },
//         { name: 'Location B', latlng: [54.205, -0.08] },
//         { name: 'Location C', latlng: [56.505, -0.07] },
//       ],
//     };
//   }
  const [map, setMap] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const map = L.map('map').setView([props.latitude, props.longitude], 18);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map);

    // var marker = new L.Marker([props.latitude, props.longitude]);
    // marker.addTo(map);
    // setMap(map);
    var stuSplit = L.latLng(props.latitude, props.longitude);
    var myMarker = L.circleMarker(stuSplit, 
    { title: 'selected' }).addTo(map);
  }, []);

  // useEffect(() => {
  //   if (selectedLocation) {
  //     const { latlng } = selectedLocation;
  //     const marker = L.marker(latlng)
  //       .addTo(map)
  //       .bindPopup(selectedLocation.name)
  //       .openPopup();
  //     map.flyTo(latlng, 15);

  //     return () => {
  //       map.removeLayer(marker);
  //     };
  //   }
  // }, [selectedLocation]);

  // const locationHandler = (location) =>{
  //   setSelectedLocation(location);
  // }

    return (
      <div className='max-w-7xl mx-6 md:mx-auto pt-32 pb-16'>
        <div id="map" className='rounded-2xl mx-auto w-4/5 h-[20rem]'></div>
      </div>
    );
}

export default Map;