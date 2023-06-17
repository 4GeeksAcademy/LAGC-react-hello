import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM
import ReactDOM from "react-native"; //we use ReactDOM to render into the Mobile

// only update the value of this array
const NavBar({title,navLabel1,navLabel2,navLabel3,navLabel4})=>{
return(

    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <label className="navbar-brand" href="#">{title}</label>
        </nav>
    </div>
);

}




const navlinkItems = [
	<li key="a" className="nav-item">
		<a className="nav-link" href="#">
			Home
		</a>
	</li>,
	<li key="b" className="nav-item">
		<a className="nav-link" href="#">
			About
		</a>
	</li>,
	<li key="c" className="nav-item">
		<a className="nav-link" href="#">
			Services
		</a>
	</li>,
    <li key="c" className="nav-item">
    <a className="nav-link" href="#">
        Contact
    </a>
</li>,
];

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));