import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";


const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>I'm trying to learn GatsbyJS</p>
            <Link to="/contact">Want to work with me? Reach out.</Link>
        </Layout>
    )
}

export default AboutPage