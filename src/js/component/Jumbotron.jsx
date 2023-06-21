import React from "react"; //Main React.js library

// only update the value of this array
export const Jumbotron = ({ title, jdescription, jbutton }) => {
    return (

        <div className="Jumbotron">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{jdescription}</p>

            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">{jbutton}</a>
            </p>

        </div>
    );
}