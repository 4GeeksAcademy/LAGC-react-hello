//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//First Componen
const Home =()=>{
    return(
        <landingPage >
            <navBar>
                const navlinkItems = [
        <li key="a" className="nav-item">
            <a className="nav-link" href="#">
                Link to google.com
            </a>
        </li>,
        <li key="b" className="nav-item">
            <a className="nav-link" href="#">
                Link to facebook.com
            </a>
        </li>,
        <li key="c" className="nav-item">
            <a className="nav-link" href="#">
                Link to amazon.com
            </a>
        </li>,
    ];

            </navBar>


        </landingPage>

    );

}

//propTypes
Home.PropTypes={

    
}


//render your react application
ReactDOM.render(<Home Menu1 Menu2 Menu3/>, document.querySelector("#app"));
