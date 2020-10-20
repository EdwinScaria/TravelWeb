import React from "react";
import MainBackground from "../Components/MainBackground";
import Banner from "../Components/Banner";
import SelectedPlaces from "../Components/SelectedPlaces";
import PhotosContainer from "../Components/PhotosContainer";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <React.Fragment>
      <MainBackground>
        <Banner title="Home" subtitle="Prime Places"></Banner>
        <div className="border">
          <SelectedPlaces></SelectedPlaces>
        </div>
      </MainBackground>
      <div className="border2">
        <PhotosContainer></PhotosContainer>
      </div>
      <MainBackground main="homeMain2">
        <Banner title="Places" subtitle="Explore prime location">
          <Link to="/Places" className="btn-primary">
            Places
          </Link>
        </Banner>
      </MainBackground>
    </React.Fragment>
  );
};
// About - Dislay few details about the app
// PhotosContainer - display a group of photos
