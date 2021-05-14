import React from "react"

import CardItem from "./CardItem"

import Navigation from "../Navigation"


function Cards(){
    return(
        <div>
        <Navigation />
        <div className = "cards">
    
            <h1>Menu</h1>
            <div className = "cards_container">

                    <ul className = "cards_items">
                        <CardItem 
                        src={ "/images/img1.jpg"}
                        text = "Bite sized chicken pieces roasted on a skewer."
                        label = "Yakitori"
                        path = "/Cart"
                        />
                        <CardItem 
                        src={ "/images/img2.jpg"}
                        text = "Pressed vinegared rice with a piece of raw fish or shellfish on top"
                        label = "Sushi"
                        path = "/Cart"
                        />
                        <CardItem 
                        src={ "/images/img3.jpg"}
                        text = "A type of thick noodle in a soup base combined with various ingredients."
                        label = "Udon"
                        path = "/Cart"
                        />
                        <CardItem 
                        src={ "/images/img4.jpg"}
                        text = "Noodle soup mixed with broth, miso, boiled egg and tonkotsu pork."
                        label = "Ramen"
                        path = "/Cart"
                        />
                        <CardItem 
                        src={ "/images/img5.jpg"}
                        text = "A dish with various meat, fish and vegetables over steamed rice. "
                        label = "Donburi"
                        path = "/Cart"
                        />
                        <CardItem 
                        src={ "/images/img6.jpg"}
                        text = "Deep fried coated pork chops in crisp panko breadcrumbs."
                        label = "Tonkatsu"
                        path = "/Cart"
                        />                  
                    </ul>
                    <ul className = "cards_items">
                        <CardItem 
                        src={ "/images/img1.jpg"}
                        text = "Bite sized chicken pieces roasted on a skewer."
                        label = "Yakitori"
                        path = "/Cart"
                        />
                        <CardItem 
                        src={ "/images/img2.jpg"}
                        text = "Pressed vinegared rice with a piece of raw fish or shellfish on top"
                        label = "Sushi"
                        path = "/Cart"
                        />
                        <CardItem 
                        src={ "/images/img3.jpg"}
                        text = "A type of thick noodle in a soup base combined with various ingredients."
                        label = "Udon"
                        path = "/Cart"
                        />
                        <CardItem 
                        src={ "/images/img4.jpg"}
                        text = "Noodle soup mixed with broth, miso, boiled egg and tonkotsu pork."
                        label = "Ramen"
                        path = "/Cart"
                        />
                        <CardItem 
                        src={ "/images/img5.jpg"}
                        text = "A dish with various meat, fish and vegetables over steamed rice. "
                        label = "Donburi"
                        path = "/Cart"
                        />
                        <CardItem 
                        src={ "/images/img6.jpg"}
                        text = "Deep fried coated pork chops in crisp panko breadcrumbs."
                        label = "Tonkatsu"
                        path = "/Cart"
                        />                  
                    </ul>
                    <ul className = "cards_items">
                        <CardItem 
                        src={ "/images/img1.jpg"}
                        text = "Bite sized chicken pieces roasted on a skewer."
                        label = "Yakitori"
                        path = "/Cart"
                        />
                        <CardItem 
                        src={ "/images/img2.jpg"}
                        text = "Pressed vinegared rice with a piece of raw fish or shellfish on top"
                        label = "Sushi"
                        path = "/Cart"
                        />
                        <CardItem 
                        src={ "/images/img3.jpg"}
                        text = "A type of thick noodle in a soup base combined with various ingredients."
                        label = "Udon"
                        path = "/Cart"
                        />
                        <CardItem 
                        src={ "/images/img4.jpg"}
                        text = "Noodle soup mixed with broth, miso, boiled egg and tonkotsu pork."
                        label = "Ramen"
                        path = "/Cart"
                        />
                        <CardItem 
                        src={ "/images/img5.jpg"}
                        text = "A dish with various meat, fish and vegetables over steamed rice. "
                        label = "Donburi"
                        path = "/Cart"
                        />
                        <CardItem 
                        src={ "/images/img6.jpg"}
                        text = "Deep fried coated pork chops in crisp panko breadcrumbs."
                        label = "Tonkatsu"
                        path = "/Cart"
                        />                  
                    </ul>

            </div>
        </div>
    </div>
        
    )
}

export default Cards