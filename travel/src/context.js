import React, { Component } from "react";
import axios from "axios";
const contentful = require("contentful");

const PlaceContext = React.createContext();
export default class PlaceProvider extends Component {
  state = {
    places: [],
    sortedPlaces: [],
    selectedPalces: [],
    selected: [],
    type: "All",
  };
  // setting the variable for getting the array
  // Also for certain function toggle

  getData = async () => {
    try {
      let client = {}; // setting a promise

      // getting API key for contentful
      let tokenPromise = axios.get("/id").then((response) => {
        let space = response.data.space;
        let accessToken = response.data.accessToken;

        client = contentful.createClient({
          space: space,
          accessToken: accessToken,
        });
      });

      await tokenPromise; // to make the client available to use

      // get access to the contenful data
      let response = await client.getEntries({
        content_type: "travel",
      });
      // getting the data
      let places = this.formatData(response.items);
      let selectedPalces = places.filter(
        (place) => place.selectedPalces === true
      );
      let selected = places.filter((place) => place.selected === true);

      // setting the data
      this.setState({
        places,
        selectedPalces,
        sortedPlaces: places,
        selected,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  // to map the image as it is set has a array
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((images) => images.fields.file.url);

      let place = { ...item.fields, images, id };
      return place;
    });
    return tempItems;
  }
  // for single-place getting the data
  getPlace = (name) => {
    let tempPlaces = [...this.state.places];
    const place = tempPlaces.find((place) => place.name === name);
    return place;
  };

  // handling change from the form in filter place
  handleChange = (event) => {
    const value = event.target.value; // recieving value from the from
    const name = event.target.name;
    this.setState(
      {
        [name]: value, // check value from state
      },
      this.filterPlaces
    );
  };

  // for the search and toggle
  filterPlaces = () => {
    let { places, buildingName, type } = this.state;
    let tempPlaces = [...places];

    if (type !== "All") {
      tempPlaces = tempPlaces.filter((place) => place.type === type);
    }

    this.setState({
      sortedPlaces: tempPlaces,
    });
  };
  render() {
    return (
      <PlaceContext.Provider
        value={{
          ...this.state, // getting all the details from the database
          getPlace: this.getPlace, // getting the getPlace data available for the other components
          handleChange: this.handleChange, // getting the handleChange available for the other components
        }}
      >
        {this.props.children}
      </PlaceContext.Provider>
    );
  }
}

const PlaceConsumer = PlaceContext.Consumer; // consumer is to access the value for the filter function
export { PlaceProvider, PlaceConsumer, PlaceContext }; // to be accessed by other components
