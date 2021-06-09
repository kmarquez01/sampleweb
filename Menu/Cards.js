

import CardItem from "./CardItem"

import Navigation from "../Navigation"

import Popup from "./PopUp"

import {useState} from "react"

import CardInfo from "./CardInfo"


function Cards(){

    const [openPopup, setOpenPopup] = useState(false)


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
                        onClick = {() => setOpenPopup(true)}
                       
                        />
                        <Popup openPopup = {openPopup} setOpenPopup = {setOpenPopup}>
                           
                        </Popup>
                        <CardItem 
                        src={ "/images/img2.jpg"}
                        text = "Pressed vinegared rice with a piece of raw fish or shellfish on top"
                        label = "Sushi"
                        onClick = {() => setOpenPopup(true)}
                        />
                        <CardItem 
                        src={ "/images/img3.jpg"}
                        text = "A type of thick noodle in a soup base combined with various ingredients."
                        label = "Udon"
                        onClick = {() => setOpenPopup(true)}
                        />
                        <CardItem 
                        src={ "/images/img4.jpg"}
                        text = "Noodle soup mixed with broth, miso, boiled egg and tonkotsu pork."
                        label = "Ramen"
                        onClick = {() => setOpenPopup(true)}
                        />
                        <CardItem 
                        src={ "/images/img5.jpg"}
                        text = "A dish with various meat, fish and vegetables over steamed rice. "
                        label = "Donburi"
                        onClick = {() => setOpenPopup(true)}
                        />
                        <CardItem 
                        src={ "/images/img6.jpg"}
                        text = "Deep fried coated pork chops in crisp panko breadcrumbs."
                        label = "Tonkatsu"
                        onClick = {() => setOpenPopup(true)}
                        />                  
                    </ul>
                    <ul className = "cards_items">
                        <CardItem 
                        src={ "/images/img1.jpg"}
                        text = "Bite sized chicken pieces roasted on a skewer."
                        label = "Yakitori"
                        onClick = {() => setOpenPopup(true)}
                        />
                        <CardItem 
                        src={ "/images/img2.jpg"}
                        text = "Pressed vinegared rice with a piece of raw fish or shellfish on top"
                        label = "Sushi"
                        onClick = {() => setOpenPopup(true)}
                        />
                        <CardItem 
                        src={ "/images/img3.jpg"}
                        text = "A type of thick noodle in a soup base combined with various ingredients."
                        label = "Udon"
                        onClick = {() => setOpenPopup(true)}
                        />
                        <CardItem 
                        src={ "/images/img4.jpg"}
                        text = "Noodle soup mixed with broth, miso, boiled egg and tonkotsu pork."
                        label = "Ramen"
                        onClick = {() => setOpenPopup(true)}
                        />
                        <CardItem 
                        src={ "/images/img5.jpg"}
                        text = "A dish with various meat, fish and vegetables over steamed rice. "
                        label = "Donburi"
                        onClick = {() => setOpenPopup(true)}
                        />
                        <CardItem 
                        src={ "/images/img6.jpg"}
                        text = "Deep fried coated pork chops in crisp panko breadcrumbs."
                        label = "Tonkatsu"
                        onClick = {() => setOpenPopup(true)}
                        />                  
                    </ul>
                    <ul className = "cards_items">
                        <CardItem 
                        src={ "/images/img1.jpg"}
                        text = "Bite sized chicken pieces roasted on a skewer."
                        label = "Yakitori"
                        onClick = {() => setOpenPopup(true)}
                        />
                        <CardItem 
                        src={ "/images/img2.jpg"}
                        text = "Pressed vinegared rice with a piece of raw fish or shellfish on top"
                        label = "Sushi"
                        onClick = {() => setOpenPopup(true)}
                        />
                        <CardItem 
                        src={ "/images/img3.jpg"}
                        text = "A type of thick noodle in a soup base combined with various ingredients."
                        label = "Udon"
                        onClick = {() => setOpenPopup(true)}
                        />
                        <CardItem 
                        src={ "/images/img4.jpg"}
                        text = "Noodle soup mixed with broth, miso, boiled egg and tonkotsu pork."
                        label = "Ramen"
                        onClick = {() => setOpenPopup(true)}
                        />
                        <CardItem 
                        src={ "/images/img5.jpg"}
                        text = "A dish with various meat, fish and vegetables over steamed rice. "
                        label = "Donburi"
                        onClick = {() => setOpenPopup(true)}
                        />
                        <CardItem 
                        src={ "/images/img6.jpg"}
                        text = "Deep fried coated pork chops in crisp panko breadcrumbs."
                        label = "Tonkatsu"
                        onClick = {() => setOpenPopup(true)}
                        />                  
                    </ul>

            </div>
        </div>
    </div>
        
    )
}

export default Cards