import WhoWeAre from "../../About/WhoWeAre"

import Locations from "../../About/Locations"

import Navigation from "../../Navigation"

import Contact from "../../About/Contact"

function Abouts(){
    return(
        <div>
            <Navigation />
            <WhoWeAre />
            <Locations />
            <Contact />
        </div>
    )
}

export default Abouts