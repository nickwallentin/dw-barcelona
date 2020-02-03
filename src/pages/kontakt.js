import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Sec, Wrap, Grid } from "../components/ui"

const ContactPage = () => {
  return (
    <Layout>
      <SEO />
      <Sec bg="var(--c-beige)">
        <Wrap>
          <h1>Kontakt</h1>
          <div>
            <strong>Anastasia Ivanova</strong>
            <p>anastasia@creandia.com, 0793 – 23 22 29</p>
          </div>
          <div>
            <strong>Dennis Westerberg</strong>
            <p>dennis@denniswesterberg.com, 0733 – 18 88 85</p>
          </div>
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default ContactPage
