import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { PlaceContext } from "../context";

const style = {
  width: "42.5vw",
  height: "34vw",
};
// setting the styling for the maps

export class Maps extends Component {
  static contextType = PlaceContext;
  render() {
    let { places } = this.context;
    return (
      <Map
        className="Maps-center"
        google={this.props.google}
        style={style}
        initialCenter={{
          // setting the props
          lat: 53.3811,
          lng: -1.4701,
        }}
        zoom={14}
      >
        {places.map((place) => {
          return (
            <Marker
              onMouseover={this.onMouseoverMarker}
              name={place.name}
              title={place.name}
              position={{ lat: place.latitude, lng: place.longitude }} // setting the marker
            />
          );
        })}
        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBDhNCoLhQWbDvEI57yMIS8ya6ZFJz_AWY",
})(Maps);
// key for the maps
