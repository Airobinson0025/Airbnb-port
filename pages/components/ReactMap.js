import { React, useState } from 'react'
import  Map, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';



const ReactMap = ({searchResults}) => {

  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // console.log(coordinates)
  const center = getCenter(coordinates);

  const [ viewport, setViewport ] = useState({
    width: '100%',
    height: '100%',
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 7,

  });

  

  return (
    <Map
    mapStyle='mapbox://styles/airobinson0025/cle8q9t35007f01rw4yh8yeuw'
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
    

      
  </ Map>
  )
}

export default ReactMap