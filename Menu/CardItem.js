
import Link from "next/link"

import CardInfo from "./CardInfo"



function CardItem(props){
    return(
        <li className = "cards_item">
            <button className = "cards_item_link" onClick = {props.onClick}>
                <div className = "cont1">
                    <figure className = "cards_item_picwrap" data-category = {props.label}>
                        <img src = {props.src} alt ="Image" className = "cards_item_img" />
                    </figure>
                    <div className = "cards_item_info">
                        <h5 className = "cards_item_text">{props.text}</h5>
                    </div>
                </div>
            </button>
        </li>
        
    )
}

export default CardItem