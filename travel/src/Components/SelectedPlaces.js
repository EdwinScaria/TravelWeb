import React, { Component } from "react";
import { PlaceContext } from "../context";
import Place from "./Place";

export default class SelectedPlaces extends Component {
  static contextType = PlaceContext; // getting the data from content
  render() {
    let { selectedPalces: places } = this.context; // using the variable set in the content // just using the selected places
    places = places.map((place) => {
      return <Place key={place.id} place={place}></Place>; // return it into place component to map all the places
    });
    return (
      <section className="Home-slected-place">
        <div className="Home-slected-place-center">{places}</div>
      </section>
    );
  }
}
