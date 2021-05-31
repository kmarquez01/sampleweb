import Link from "next/link"

import { HiMenu } from "react-icons/hi"

import {useState} from "react"


function Navigation(){

    const [button, setButton] = useState(true)

    const displayButton = () => {
        if(window.innerWidth <= 800){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

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

                    <button className = "sandwich"><HiMenu /></button>                
                </ul>
            </nav>
        </div>
    </div>
    ) 
}

export default Navigation