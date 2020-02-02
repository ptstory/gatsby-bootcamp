import React from "react";
import { Link } from "gatsby";

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <p>I'm trying to learn GatsbyJS</p>
            <Link to="/contact">Want to work with me? Reach out.</Link>
        </div>
    )
}

export default AboutPage