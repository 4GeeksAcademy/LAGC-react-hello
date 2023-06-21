import React from "react";
import { NavBar } from "./NavBar";
import { Jumbotron } from "./Jumbotron";
import { CardList } from "./CardList";
import {Footer} from "./Footer";


export function LandingPage() {
    return (
        //React Fragment<> and </>
        <div>
            <NavBar title={"Start Boostrap"} navLabel1={"Home"} navLabel2={"About"} navLabel3={"Services"} navLabel4={"Contact"} />
            <div className="m-4">
                <Jumbotron title={"A warm Welcome!"} jbutton={"Call to action"} jdescription={"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."} />

            </div>

            <div className="container Card ">
                <div className="row">
                    <div className="col sm-12 md-6">
                        <CardList className={"Card"} carTitle={"Card Title"} CardDescription={"Descriptions"} CardButton={"Find Out More"} />

                    </div>
                    <div className="col sm-12 md-6">
                        <CardList carTitle={"Card Title"} CardDescription={"Descriptions"} CardButton={"Find Out More"} />

                    </div>
                    <div className="col sm-12 md-6">
                        <CardList carTitle={"Card Title"} CardDescription={"Descriptions"} CardButton={"Find Out More"} />

                    </div>
                    <div className="col sm-12 md-6">
                        <CardList carTitle={"Card Title"} CardDescription={"Descriptions"} CardButton={"Find Out More"} />
                    </div>
                </div>
            </div>
            <Footer footerTitle="© 2022 Company, Inc"></Footer> 

        </div>
    )
}

