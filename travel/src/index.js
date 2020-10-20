import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { PlaceProvider } from "./context";
import Access from "./Access";

ReactDOM.render(
  <PlaceProvider>
    <Access />
    <Router>
      <App />
    </Router>
  </PlaceProvider>,
  document.getElementById("root")
);

// placeprovider - to access the content of the contentful database
// Access - to set the cookie to the browser
// App - is the application
// Router - the navigation between each page

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
