import React from "react"

import {Dialog, DialogTitle, DialogContent} from "@material-ui/core";

import {useState} from "react"

import { FaTimes } from "react-icons/fa"

import Link from "next/link"

import CardItem from "./CardItem"
import CardInfo from "./CardInfo";

function Popup(props){
    const {title, children, openPopup, setOpenPopup} = props;

    const [counter, setCounter] = useState(0);
    const [ index, setIndex] = useState(0);

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

    const foodItem = CardInfo.find(({id}) => id);

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
         
           
                    <div className = "fooditem">
                        <div className = "fooditemsub">
                        {foodItem.name}
                        </div>
                        {foodItem.price}
                        
                    </div>
                
     
              

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