import React, { Component } from "react";
import MainBackground from "../Components/MainBackground";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import defaultImg from "../images/Main.jpg";
import { PlaceContext } from "../context";
import StyledMain from "../Components/StyledMain";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import PhotosContainer from "../Components/PhotosContainer";

const style = {
  width: "50vw",
  height: "20vw",
};
// styling style variable of the map , setting the sizing

export class SinglePlace extends Component {
  // constructor prop for using this and state

  constructor(props) {
    super(props);
    this.state = {
      // getting variable from the url when a place is clicked
      name: this.props.match.params.name,
      defaultImg,
    };
  }
  static contextType = PlaceContext; // getting all the data from cotent
  render() {
    const { getPlace } = this.context;
    const place = getPlace(this.state.name);

    if (!place) {
      return (
        <MainBackground>
          <Banner title="Error" subtitle="Page Not Found">
            <Link to="/" className="btn-primary">
              Home
            </Link>
          </Banner>
        </MainBackground>
      );
    }
    const {
      name,
      description,
      images,
      city,
      events,
      latitude,
      longitude,
    } = place; // getting all these information from the place array  // checking if its easy to the prop , variable from the url
    return (
      <React.Fragment>
        <StyledMain img={images[0] || defaultImg}>
          <Banner title={name} subtitle={city}>
            <Link to="/places" className="btn-primary">
              Places
            </Link>
          </Banner>
        </StyledMain>
        <div className="single-place-container">
          <section className="single-place">
            <div className="single-place-info">
              <article className="desc">
                <h3>details</h3>
                <p>{description}</p>
              </article>
            </div>
          </section>
          <section className="single-place">
            <div className="single-place-info">
              <article className="desc">
                <h6>Events</h6>
                <ul className="extras">
                  {events.map((item, index) => {
                    return <li key={index}>- {item}</li>;
                  })}
                </ul>
              </article>
            </div>
          </section>
        </div>
        <section className="single-place-container">
          <div>
            <Map
              google={this.props.google} // setting prop for the map
              initialCenter={{
                lat: latitude,
                lng: longitude,
              }}
              style={style}
              zoom={15}
              className="Maps-center-single"
            >
              <Marker
                title={"The marker`s title will appear as a tooltip."}
                name={"SOMA"}
                position={{ lat: latitude, lng: longitude }} // setting the marker location
              />
              <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
            </Map>
          </div>
        </section>
        <div className="single-place-selected">
          <PhotosContainer />
        </div>
      </React.Fragment>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBDhNCoLhQWbDvEI57yMIS8ya6ZFJz_AWY",
})(SinglePlace);
// Api key for google api

// Section - displaying each field from the database
// Selected place - component that contain 3 featured location
// Map - Displays the Map
