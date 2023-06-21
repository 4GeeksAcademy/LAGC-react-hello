//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { LandingPage } from "./component/LandingPage";

//render your react application
ReactDOM.render(<LandingPage />, document.querySelector("#app"));
