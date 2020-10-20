import React from "react";
import PlaceFilter from "./filter";
import PlaceList from "./list";
import { PlaceConsumer } from "../context";
export default function Placefiler() {
  return (
    <PlaceConsumer>
      {(value) => {
        const { sortedPlaces, places } = value;

        return (
          <div>
            <PlaceFilter places={places} />
            <PlaceList places={sortedPlaces} />
          </div>
        );
      }}
    </PlaceConsumer>
  );
}
// placeCosumer - getting all the value inside the provider
// Placefiler -  setting prop for all the information
// Place - setting information about the selected places
