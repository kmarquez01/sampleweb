import {useState} from "react"

function Contact(){
    return(
        <section className = "contact">
            <div className = "contact-container">

                <h1>Have any inquiries? Feel free to contact us!</h1>
                <form className = "contact-form">

                    <div className = "names">
                        <div className ="form">
                            <input type = "text" name = "name" placeholder = "First Name" className = "names" required></input>
                        </div>
                        <div className = "form">
                            <input type = "text" name = "name" placeholder = "Last Name" className = "names" required></input>
                        </div>
                    </div>
                    <div className ="form">
                        <input type = "text" name = "email" placeholder = "Email" required></input>
                    </div>
                    <div className ="form">
                        <input type = "text" name = "company" placeholder = "Short description" required></input>
                    </div>
                    <input type ="submit" value ="Send" className = "btn-primary"></input>
                </form>
            
            </div>
        </section>
    )
}

export default Contact