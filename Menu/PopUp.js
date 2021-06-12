import React from "react"

import {Dialog, DialogTitle, DialogContent} from "@material-ui/core";

import {useState} from "react"

import { FaTimes } from "react-icons/fa"

import Link from "next/link"

import CardItem from "./CardItem"
import CardInfo from "./CardInfo";

function Popup(props){
    const {title, children, openPopup, setOpenPopup} = props;

    const [counter, setCounter] = useState(0)
    const [ cartItems, setCartItems] = useState();

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
               <div className = "header-popout">
                   Total
                    <FaTimes onClick = {() => setOpenPopup(false)}>
                    </FaTimes>
               </div>
           </DialogTitle>
           <DialogContent>    
           {CardInfo.map( (food, id) => (
                    <div className = "fooditem" key = {id}>
                        <div className = "fooditemsub">
                        {food.name}
                        </div>
                        {food.price}
                        
                    </div>
                )
            )}
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
                    <a href = "/Cart" className = "cartbutton">Add to cart</a>
               </div>
           </DialogContent>
       </Dialog>
   )
}

export default Popup