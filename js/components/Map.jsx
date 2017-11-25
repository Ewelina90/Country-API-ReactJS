import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 52, lng: 20},
    zoom: 5
  };

  render() {
    return (
      <GoogleMapReact
        apiKey={'AIzaSyAMHbSKL-PrXZUvB-FkX8hJf8Ia3Xv8Uv4'}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        center={this.props.centerMap}
      >
      </GoogleMapReact>
    );
  }
}
