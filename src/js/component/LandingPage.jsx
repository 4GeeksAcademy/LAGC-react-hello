import React from "react";
import { NavBar } from "./NavBar";
import { Jumbotron } from "./Jumbotron";
import { CardList } from "./CardList";

export function LandingPage() {
    return (
        //React Fragment<> and </>
        <div>
            <NavBar title={"Start Boostrap"} navLabel1={"Home"} navLabel2={"About"} navLabel3={"Services"} navLabel4={"Contact"} />
            <div className="m-4">
                <Jumbotron title={"A warm Welcome!"} jbutton={"Call to action"} jdescription={"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."} />

            </div>
            <div className="CarrouselCard" >
                <CardList className={"Card"} carTitle={"Card Title"} CardDescription={"Descriptions"} CardButton={"Find Out More"} />
                <CardList carTitle={"Card Title"} CardDescription={"Descriptions"} CardButton={"Find Out More"} />
                <CardList carTitle={"Card Title"} CardDescription={"Descriptions"} CardButton={"Find Out More"} />
                <CardList carTitle={"Card Title"} CardDescription={"Descriptions"} CardButton={"Find Out More"} />
            </div>


            {/* <div className="CarrouselCard " >
                <CardList className={"Card"} carTitle={"Card Title"} CardDescription={"Descriptions"} CardButton={"Find Out More"} />
                <CardList carTitle={"Card Title"} CardDescription={"Descriptions"} CardButton={"Find Out More"} />
                <CardList carTitle={"Card Title"} CardDescription={"Descriptions"} CardButton={"Find Out More"} />
                <CardList carTitle={"Card Title"} CardDescription={"Descriptions"} CardButton={"Find Out More"} />
            </div> */}


            <div class="container">
                <div className="row">
                    <div className="col sm-12 md-3">
                        <CardList className={"Card"} carTitle={"Card Title"} CardDescription={"Descriptions"} CardButton={"Find Out More"} />

                    </div>
                    <div className="col sm-12 md-3">
                        <CardList carTitle={"Card Title"} CardDescription={"Descriptions"} CardButton={"Find Out More"} />

                    </div>
                    <div className="col sm-12 md-3">
                        <CardList carTitle={"Card Title"} CardDescription={"Descriptions"} CardButton={"Find Out More"} />

                    </div>
                    <div className="col sm-12 md-3">
                        <CardList carTitle={"Card Title"} CardDescription={"Descriptions"} CardButton={"Find Out More"} />
                    </div>
                </div>
            </div>

            {/*        <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            <Footer></Footer> */}

        </div>
    )
}

