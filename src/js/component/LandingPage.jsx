import React from "react";
import {NavBar} from "./NavBar";
import {Jumbotron} from "./Jumbotron";
import {NavBar} from "./NavBar";

export function LandingPage(){
    return(
        //React Fragment<> and </>
        <>
            <NavBar/>
            <Jumbotron/>
            <CardList/>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            <Footer></Footer>

        </>
    )
}
