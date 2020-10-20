import React, { Component } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { FaArrowCircleDown } from "react-icons/fa";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen }); // for the nav button to show and hide the navigation
  };
  render() {
    return (
      <React-Fragment>
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header"></div>
            <Link to="/">
              <img className="logo" src={logo} alt="Travel"></img>
            </Link>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/places">Places</Link>
              </li>
            </ul>
          </div>
          <button type="button" className="nav-btn" onClick={this.handleToggle}>
            <div className={!this.state.isOpen ? "nav-btn" : "nav-btn-link"}>
              <FaArrowCircleDown className="nav-icon"></FaArrowCircleDown>
            </div>
          </button>
        </nav>
      </React-Fragment>
    );
  }
}

// Link to display the log
// UL display the navigation
// FaArrow - icon for the clickable button in the nav
// Onclick - is the toggle change
