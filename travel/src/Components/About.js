import React, { Component } from "react";
import { FaNewspaper, FaMapMarkerAlt, FaCloud, FaReadme } from "react-icons/fa";

export default class About extends Component {
  // dislaying an array of details
  state = {
    services: [
      {
        icon: <FaNewspaper />, // icon
        title: "News",
        info: "See the latest news Articles",
      },
      {
        icon: <FaMapMarkerAlt />,
        title: "Maps",
        info: "Check you locations on the map",
      },
      {
        icon: <FaCloud />,
        title: "Weather",
        info: "Check the weather before making your visit",
      },
      {
        icon: <FaReadme />,
        title: "About",
        info: "Travel page, Final year dissertation project",
      },
    ],
  };

  render() {
    return (
      <section className="About">
        <div className="About-center">
          {this.state.services.map((item, index) => {
            // mapping the array and displaying the details
            return (
              <article key={index} className="About">
                <span>{item.icon}</span>
                <h5>{item.title}</h5>
                <h6>{item.info}</h6>
              </article>
            );
          })}
        </div>
        <div>© DreamHigh Ltd 2020</div>
      </section>
    );
  }
}
