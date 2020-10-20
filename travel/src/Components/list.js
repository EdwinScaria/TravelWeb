import React from "react";
import Place from "./Place";

export default function list({ places }) {
  // the prop from placefilter, containing detail about selected places
  return (
    <section className="selected-place">
      <div className="selected-place-center">
        {places.map((item) => {
          return <Place key={item.id} place={item} />;
        })}
      </div>
    </section>
  );
}
// displaying all the places
