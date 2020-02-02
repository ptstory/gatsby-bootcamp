import React from "react";
import Header from "../components/header"
import Footer from "../components/footer"

const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact</h1>
            <p>Shoot me a message me at <a href="mailto: perry.t.story@gmail.com">perry.t.story@gmail.com</a></p>
            <p>I don't use twitter but here's the guy I'm learning Gatsby from: <a href="https://twitter.com/andrew_j_mead" target="_blank" rel="noopener noreferrer">Andrew Mead</a> </p>
            <Footer />
        </div>
    )
}

export default ContactPage