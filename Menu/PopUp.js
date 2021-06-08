import React from "react"

import {Dialog, DialogTitle, DialogContent} from "@material-ui/core";

import {useState} from "react"

import Link from "next/link"

import CardItem from "./CardItem"

function Popup(props){
    const {title, children, openPopup, setOpenPopup} = props;

    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    const handleClick1 = () => {
        if(counter === 0){
            setCounter(0)
        }
        else{
            setCounter(counter - 1)
        }
    }

   return(
       <Dialog open = {openPopup}>
           <DialogTitle>
               <div>Total</div>
           </DialogTitle>
           <DialogContent>
               <div className = "countmain">
                   <button className = "count" onClick = {handleClick1}>
                       -
                   </button>
                   <div className = "countsub">
                   {counter}
                   </div>
                   <button className = "count" onClick = {handleClick}>
                       +
                   </button>
                </div>
                <div className = "addcart">
                    <button href = "/Cart" >Add to cart</button>
               </div>
           </DialogContent>
       </Dialog>
   )
}

export default Popup