import React from "react"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        Shoot me a message me at{" "}
        <a href="mailto: perry.t.story@gmail.com">perry.t.story@gmail.com</a>
      </p>
      <p>
        I don't use twitter but here's the guy I'm learning Gatsby from:{" "}
        <a
          href="https://twitter.com/andrew_j_mead"
          target="_blank"
          rel="noopener noreferrer"
        >
          Andrew Mead
        </a>{" "}
      </p>
    </Layout>
  )
}

export default ContactPage
