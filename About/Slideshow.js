
import React, {useState} from "react"

import  {SlideshowData}  from "./SlideshowData"

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"


const Slideshow = ({slides}) => {
const [current, setNew] = useState(0);


const next = () => {
    setNew(current === slides.length - 1 ? 0 : current + 1)
}

const prev = () => {
    setNew(current === 0 ? slides.length - 1: current - 1)
}

console.log(current)

if (!Array.isArray(slides) || slides.length <= 0){
    return null;
}




    return(
        <div className = "slide">
            <FaArrowAltCircleLeft className ="left" onClick = {prev} />
            
            {SlideshowData.map((slide, index) => {
                return(
                    <div className = {index === current ? 'slide active' : 'slide'} key ={index}>
                         
                        {index === current && (<img src = {slide.image} alt = "whatever" className = "image"/>) }
                        
                    </div>
                    
                    
                )
                
            })}
            
            
            <FaArrowAltCircleRight className ="right" onClick = {next} /> 
            <div className = "aboutus-container">
                <title className = "aboutus-title">Who We are</title> 
                <p className = "aboutus-p">We are a japanese based restaurant who thrives on providing the highest quality food from our culture. Innovation and motivation is what drives us forward, and we hope to show that through our dishes!</p>
            </div>
             
        </div>
    )

}
export default Slideshow
