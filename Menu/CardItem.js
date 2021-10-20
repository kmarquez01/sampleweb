
import { getThemeProps } from "@material-ui/styles";
import Link from "next/link"

import CardInfo from "./CardInfo"

import {useState} from "react"

import PopUp from "./PopUp"




function CardItem(props){

  const [openPopup, setOpenPopup] = useState(false)

    return (
      <div className = "card_holder">
          {CardInfo.map((item) => {
            return (
              <li className = "cards_item" key={item.id} onClick = {props.onClick}>
                <button className = "cards_item_link">
                <PopUp openPopup = {openPopup} setOpenPopup = {setOpenPopup}>
                           
                        </PopUp>
                <div className = "cont1">
                    <figure className = "cards_item_picwrap" data-category = {item.name}>
                <img src={item.image} alt = "Image" className = "cards_item_img"/>
                </figure>
                <div className = "cards_item_info">
                  <h5 className = "cards_item_text">{item.description}</h5>
                </div>
                </div>
                </button>
              </li>
            );
          })}
          </div>
       
    );
  };



export default CardItem