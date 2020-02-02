import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello.</h1>
            <h2>I'm Perry, a full-stack developer living in beautiful Atlanta.</h2>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>

    )
}

export default IndexPage