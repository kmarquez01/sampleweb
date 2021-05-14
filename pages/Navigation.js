import React, {useState} from "react"

import Link from "next/link"



function Navigation(){
    return (
        <div className ="nav">
        <div className = "container flex">
            <h1 className ="logo">Sample Web</h1>
            <nav>
                <ul>
                    <li><Link href="/Home">Home</Link></li>
                    <li><Link href="/Menu">Menu</Link></li>
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="/Cart">Cart</Link></li>

                   
                </ul>
            </nav>
        </div>
    </div>
    ) 
}

export default Navigation