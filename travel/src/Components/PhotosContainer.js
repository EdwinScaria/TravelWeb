import React, { Component } from "react";
import { PlaceContext } from "../context";
import Photo from "./Photo";

export default class PhotosContainer extends Component {
  static contextType = PlaceContext; // getting information from contenful database
  render() {
    let { selected: places } = this.context; // just the information on selected field in the database, only the data that matches selected
    places = places.map((place) => {
      return <Photo key={place.id} place={place}></Photo>; // returing it to photo to structure the photos
    });
    return (
      <section className="photo">
        <div className="photo-center">{places}</div>
      </section>
    );
  }
}
