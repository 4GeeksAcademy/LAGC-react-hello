import React from "react"; //Main React.js library

export const Footer = ({ footerTitle}) => {
    return (
        /*<div className="container">*/
            <div className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"></a>
                    <span className="mb-3 mb-md-0 text-light">{footerTitle}</span>
                </div>

                {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="#"></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"></a></li>
                </ul> */}
            </div>
        /*</div>*/
    );
};