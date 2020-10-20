import React from "react";
import MainBackground from "../Components/MainBackground";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Weather from "../Components/Weather";
import PalceFilter from "../Components/Placefiler";
import Maps from "../Components/Maps";
import News from "../Components/News";
export const Places = () => {
  return (
    <React.Fragment>
      <MainBackground main="placesMain">
        <Banner title="Places" subtitle="Explore prime location">
          <Link to="/" className="btn-primary">
            Home
          </Link>
        </Banner>
        <Weather></Weather>
      </MainBackground>
      <PalceFilter></PalceFilter>
      <div className="info-center">
        <News></News>
        <Maps></Maps>
      </div>
    </React.Fragment>
  );
};
// PlaceFiler - Is displaying all the place and the search and filter toggle
// News - Is the news component
// Maps - Is the map component
