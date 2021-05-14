import React from "react"

import Link from "next/link"



function CardItem(props){
    return(
        <li className = "cards_item">
            <Link className = "cards_item_link" href= {props.path}>
                <div>
                    <figure className = "cards_item_picwrap" data-category = {props.label}>
                        <img src = {props.src} alt ="Image" className = "cards_item_img" />
                    </figure>
                    <div className = "cards_item_info">
                        <h5 className = "cards_item_text">{props.text}</h5>
                    </div>
                </div>
            </Link>
        </li>
        
    )
}

export default CardItem