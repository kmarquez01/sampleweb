

import Slideshow from "./Slideshow"

import {SlideshowData} from "./SlideshowData"

import {motion} from "framer-motion"

function WhoWeAre(){
    return(
        <section id = "WhoWeAre" >
            <div className = "about-txt">
            <motion.div initial = "hidden" animate = "visible" variants = {{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 1
                        }
                    }
                }}>
                <h1>Comfort is reassuring, but bears no fruit overtime.</h1>
                </motion.div>
            </div>
            <img src = "https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            <Slideshow slides={SlideshowData} />
        </section>
    )
}

export default WhoWeAre

