import React, { Component } from "react";
import MainBackground from "../Components/MainBackground";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";

export default class Error extends Component {
  render() {
    return (
      <React.Fragment>
        <MainBackground>
          <Banner title="404" subtitle="Page Not Found">
            <Link to="../" className="btn-primary">
              Home
            </Link>
          </Banner>
        </MainBackground>
      </React.Fragment>
    );
  }
}
