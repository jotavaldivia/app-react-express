import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

export default withScriptjs(withGoogleMap(({
  center,
  marker,
  zoom = 8,
}) =>
  <GoogleMap
    defaultZoom={zoom}
    defaultCenter={center}
    center={center}
  >
    {marker && <Marker position={marker.coords} label={marker.name} />}
  </GoogleMap>
))
