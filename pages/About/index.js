import React from "react"

import WhoWeAre from "./WhoWeAre"

import Locations from "./Locations"

import Navigation from "../Navigation"

function Abouts(){
    return(
        <div>
            <Navigation />
            <WhoWeAre />
            <Locations />
        </div>
    )
}

export default Abouts