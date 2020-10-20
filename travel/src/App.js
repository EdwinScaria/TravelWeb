import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Places } from "./pages/Places";
import SinglePlace from "./pages/SinglePlace";
import Error from "./pages/Error";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import withAuth from "./withAuth";
import About from "./Components/About";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={withAuth(Home)} />
        <Route exact path="/Places/" component={withAuth(Places)} />
        <Route exact path="/Places/:name" component={withAuth(SinglePlace)} />
        <Route component={Error} />
      </Switch>
      <About />
    </React.Fragment>
  );
}

// Navbar - put navigation of the page - its outside the switch so every page will display it
// Switch - so the only the exact page will display or other component will display in the every page
// route  - routing to each page
// :name - variable to be used for single page
// with Auth - authentication for each page

export default App;
