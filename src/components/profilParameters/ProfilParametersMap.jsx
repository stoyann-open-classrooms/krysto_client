import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

function ProfilParametersMap({coordinates}) {
  return (
    <MapContainer
    className="container p-4"
    style={{ height: '150px' }}
    center={coordinates}
    zoom={13}
    scrollWheelZoom={true}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
    />
    <Marker
      position={coordinates}
    >
      <Popup>hello popup</Popup>
    </Marker>
  </MapContainer>
  )
}

export default ProfilParametersMap