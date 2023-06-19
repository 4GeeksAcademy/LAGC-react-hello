import React from "react"; //Main React.js library

// only update the value of this array
export const NavBar = ({ title, navLabel1, navLabel2, navLabel3, navLabel4 }) => {
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
        <div className="container-fluid justify-between">
          <div className="title align-co">
            <a className="navbar-brand" href="#">{title}</a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
            <div className="navbar-nav" >
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Services</a>
              <a className="nav-link" href="#">Contact</a>
            </div>
          </div>

        </div>
      </nav>

    </div>
  );

}

