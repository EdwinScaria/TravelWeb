import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/Main.jpg";

export default function Place({ place }) {
  const { name, images } = place;
  return (
    <article className="place">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single place" />
        <Link to={`/places/${name}`} className="btn-primary place-link">
          {name}
        </Link>
      </div>
    </article>
  );
}

// Map function from the selected places
// this give the image and structure
// Link to navigate a button to that specific page
