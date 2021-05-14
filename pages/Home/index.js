import Footer from "./Footer"

import MainContent from "./MainContent"

import styles from "../../styles/Home.module.css"

import  Link  from 'next/link'

import Navigation from "../Navigation"



function Homes(){
    return(
        <div className = {styles.container0}>
            <Navigation />
            <section className = {styles.home}>
                <h1 className = {styles.title}>Welcome to JPNF, where food cravings are satisfied!</h1>
                <Link href = "/Menu">
                <button className = {styles.button}>Go!</button>
                </Link>
            </section>
            <MainContent />
            <Footer />
           
        </div>
        
    )
}

export default Homes