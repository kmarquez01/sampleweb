import Link from "next/link"

import { HiMenu } from "react-icons/hi"

import { FaTimes } from "react-icons/fa"

import React, {useState} from "react"


class Navigation extends React.Component{
    
    constructor(){
        super();
    }

    state = {clicked: false}

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

   

    
    render(){
        const object = 
        <div className = "death">
            <li><Link href="/Home"  activeClassName = "active" onClick = {this.handleClick} ><button className = "navbut" >Home</button></Link></li>
            <li><Link href="/Menu" activeClassName = "active" onClick = {this.handleClick} ><button className = "navbut">Menu</button></Link></li>
            <li><Link href="/About" activeClassName = "active" onClick = {this.handleClick}><button className = "navbut">About</button></Link></li>
            <li><Link href="/Cart" activeClassName = "active" onClick = {this.handleClick}><button className = "navbut">Cart</button></Link></li>
        </div>
        return (
            <div className ="nav">
            <div className = "container flex">
                <h1 className ="logo">Lafu</h1>
                <nav>
                    <ul>
                        {this.state.clicked ? object: ""}

                        <button className = "sandwich" onClick = {this.handleClick}>
                            {this.state.clicked ? <FaTimes />: <HiMenu />}
                        </button>                
                    </ul>
                    
                </nav>
            </div>
        </div>
        ) 
    }
}

export default Navigation