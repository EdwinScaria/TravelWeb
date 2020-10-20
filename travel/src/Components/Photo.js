import React from "react";

export default function Place({ place }) {
  const { images } = place;
  return (
    <article className="img-place">
      <div className="img-photo-container">
        <img src={images[1]} alt="single place" />
      </div>
    </article>
  );
}
// return from photocontainer and structuring the image.
