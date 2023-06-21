import React from "react"; //Main React.js library

// only update the value of this array
export const CardList = ({ carTitle, CardDescription, CardButton }) => {
    return (

        <>
            <div className="Card" style={{ width: '18 rem' }}>
                <img className="card-img-top img-thumbnail" src="https://placehold.co/500x325" alt="Card image cap" />
                <p></p>
                <div className="card-body">
                    <hr ></hr>
                    <h5 className="card-title">{carTitle}</h5>
                    <p className="card-text">{CardDescription}</p>
                    <hr ></hr>
                    <a href="#" className="btn btn-primary ">{CardButton}</a>
                </div>
            </div>
        </>

    );
}