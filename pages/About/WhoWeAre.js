import React, {useState} from "react"

import Slideshow from "./Slideshow"

import {SlideshowData} from "./SlideshowData"

function WhoWeAre(){
    return(
        <section className = "WhoWeAre">
            <img src = "https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            <Slideshow slides={SlideshowData} />
        </section>
    )
}

export default WhoWeAre

