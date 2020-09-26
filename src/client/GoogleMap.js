
import React, { Component } from 'react'
import request from 'superagent'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps'

import MapComponent from './Map'

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      comunas: [],
      center: {
        lat: -33.4578351,
        lng: -70.6847643,
      },
      marker: null,
      zoom: 12,
    }
  }

  componentWillMount() {
    request
      .get('http://localhost:3000/api/comunas')
      .end((err, res) => {
        const comunas = JSON.parse(res.text).comunas;
        this.setState({ comunas: comunas });
      });

  }

  panToArcDeTriomphe(comuna) {
    this.setState({
      center: {
        lat: comuna.coords[0],
        lng: comuna.coords[1],
      },
      marker: {
        coords: {
          lat: comuna.coords[0],
          lng: comuna.coords[1],
        },
        name: comuna.name,
      },
      zoom: 5
    });
  }

  render() {
    const mapStyle = {
      width: 500,
      height: 300,
      border: '1px solid black'
    };

    const {
      center,
      comunas,
      marker,
      zoom,
    } = this.state

    const datos = comunas.map((comunas, i) => (
      <li onClick={() => this.panToArcDeTriomphe(comunas)} className="list-group-item" id="lon" key={i} >
        {comunas._id}&nbsp;&nbsp;{comunas.name}&nbsp;&nbsp;{comunas.coords[0]}&nbsp;&nbsp;{comunas.coords[1]}
      </li>
    ))

    return (
      <div className="container">
        <h1 align="center">App creada con React y Express</h1>
        <br /> <br />
        <div className="row">
          <div className="col-md-8">
            <MapComponent
              marker={marker}
              center={center}
              zoom={zoom}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAVaGCOWmjGZom7YChXI7Xl5qwjIRJT73c"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
          <div className="col-md-4">
            <ul className="list-group">
              <li className="list-group-item active" >Lista de comunas</li>
              {datos}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Map
