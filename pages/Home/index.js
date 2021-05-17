import Footer from "../../Home/Footer"

import MainContent from "../../Home/MainContent"

import styles from "../../styles/Home.module.css"

import  Link  from 'next/link'

import Navigation from "../../Navigation"

import {motion} from "framer-motion"



function Homes(){
    return(
        <div className = {styles.container0}>
            <Navigation />
            <section className = {styles.home}>
                <div className = "introcontainer">
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
                    <h1 className = {styles.title}>Welcome to JPNF, where food cravings are satisfied!</h1>
                </motion.div>
                <motion.div initial = "hidden" animate = "visible" variants = {{
                    hidden: {
                        scale: 1,
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
                    <Link href = "/Menu">
                        <button className = {styles.button}>Go!</button>
                    </Link>
                 </motion.div>
                </div>
            </section>
            <MainContent />
            <Footer />
           
        </div>
        
    )
}

export default Homes