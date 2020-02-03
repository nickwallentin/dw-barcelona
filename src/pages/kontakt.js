import React, { useState } from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import InfoModal from "../components/infoModal"
import SEO from "../components/seo"
import { Sec, Wrap, Grid } from "../components/ui"

const ContactPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const bookLink = "https://airtable.com/shrgepjwaaoiQnE8w"
  return (
    <React.Fragment>
      <Header modalOpen={modalOpen} setModalOpen={setModalOpen} />
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
      {modalOpen && (
        <InfoModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          bookLink={bookLink}
        />
      )}
    </React.Fragment>
  )
}

export default ContactPage
