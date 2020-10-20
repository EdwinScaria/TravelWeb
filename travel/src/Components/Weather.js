import React, { Component } from "react";
import axios from "axios";
import image from "../images/night.jpg";
import { PlaceContext } from "../context";
export default class Weather extends Component {
  static contextType = PlaceContext;
  state = {
    // setting variable for the field I be using
    temperature: "",
    description: "",
    time: "",
    location: "",
    image: "",
  };
  componentDidMount() {
    this.getWeather();
  }

  getWeather = async () => {
    try {
      let client = {}; // setting the promise

      // recieving the key from the databse
      let tokenPromise = axios.get("/id").then((response) => {
        let key = response.data.key;

        client = key;
      });

      await tokenPromise;

      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${client}&query=Sheffield` // passing in the key to the get url   // getting the data
        )
        .then((res) => {
          this.setState({
            // setting the value into the variable

            temperature: res.data.current.temperature,
            time: res.data.location.localtime,
            description: res.data.current.weather_descriptions,
            location: res.data.location.name,
            image: res.data.current.weather_icons,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <React.Fragment>
        <section className="weather">
          <div className="weather-center">
            <article className="place">
              <div className="weather-container">
                <img src={image} alt="single place" />
                <div className="weather-top">
                  <div>Weather</div>
                  <div>{this.state.time}</div>
                  <div>Temperature : {this.state.temperature} C</div>
                  <div> Sky : {this.state.description}</div>
                </div>
              </div>
              <p className="weather-info">{this.state.location}</p>
            </article>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
// this.state - to display the value from the API
