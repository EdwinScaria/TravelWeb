import React, { Component } from "react";
import axios from "axios";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

export default class News extends Component {
  state = {
    artcle: [], // array to store the full json data
  };
  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    try {
      let client = {}; // setting promise

      // accessing the key
      let tokenPromise = axios.get("/id").then((response) => {
        let News = response.data.News;

        client = News;
      });

      await tokenPromise; // making the client available to use

      // accessing the data
      axios
        .get(`http://newsapi.org/v2/top-headlines?country=gb&apiKey=${client}`) // passing in the key
        .then((res) => {
          this.setState({
            artcle: res.data.articles,
          });
          console.log(this.state.artcle);
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
      <Slider>
        {this.state.artcle.map((item, index) => {
          // item is every single data inside the array // making the data avaible
          return (
            <div key={index} className="News">
              <div className="news-text">{item.title}</div>
              <div className="news-desc">{item.description}</div>
              <div className="news-container">
                <img src={item.urlToImage} alt="" />
                <button
                  onClick={() => {
                    window.open(item.url, "_blank"); // open a new window matching the url from the database
                  }}
                  className="btn-primary place-link"
                >
                  About
                </button>
                <div className="news-author">{item.author}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    );
  }
}
