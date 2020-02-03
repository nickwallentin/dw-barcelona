import React from "react"
import styled from "styled-components"

import { Grid, Btn } from "./ui"

const InfoModal = ({ modalOpen, setModalOpen, bookLink }) => {
  return (
    <InfoModalContainer>
      <div className="header">
        <h1 style={{ marginBottom: "0px" }}>Barcelona</h1>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setModalOpen(!modalOpen)}
        >
          Stäng
        </span>
      </div>
      <Grid cols="1fr 1fr 1fr">
        <div>
          <h2>Praktiskt information</h2>
          <ul>
            <li>
              <strong>Plats:</strong> H10 Universitat, i centrala Barcelona
            </li>
            <li>
              <strong>Datum:</strong> 24 – 27 september, 2020
            </li>
            <li>
              <strong>Tider:</strong>
              <ul>
                <li>
                  Ankomst 24/9 på eftermiddag/kväll. Vi välkomnar och tar en
                  drink.
                </li>
                <li>Frukost varje dag: 9 – 10</li>
                <li>Utbildning den 25/9, 26/9, 27/9: kl 10.00–14.00</li>
                <li>Hemfärd: tidigast kl 15.00, 27/9</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h3>Vad ingår:</h3>
          <ul>
            <li>Utbildning med Dennis Westerberg</li>
            <li>Övernattning på hotell i tre nätter (del i dubbelrum)</li>
            <li>Frukost varje morgon</li>
            <li>Middag på kvällen den 25/9</li>
            <li>Vinprovning, eftermiddag, den 26/9</li>
            <li>Frukt, kaffe och te alla dagar </li>
            <li>Transfer, till och från flygplatsen i Barcelona</li>
          </ul>
        </div>
        <div>
          <h3>Vad tillkommer:</h3>
          <ul>
            <li>
              Var och en bokar och betalar sin egen flygresa, till och från
              Barcelona
            </li>
            <li>Enkelrumstillägg: 2000 kr</li>
          </ul>
        </div>
      </Grid>

      <p
        style={{
          color: "var(--c-copper)",
          fontSize: "24px",
          borderTop: "1px solid #ffffff20",
          paddingTop: "20px",
        }}
      >
        <span
          style={{
            color: "var(--c-beige)",
            display: "block",
            fontSize: "18px",
          }}
        >
          Pris:
        </span>
        16.500 kr
      </p>
      <Btn href={bookLink} rel="noopener noreferrer" target="_blank">
        Boka din plats
      </Btn>
    </InfoModalContainer>
  )
}

export default InfoModal

const InfoModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0px;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  padding: 8vw;
  background: var(--c-green);
  color: var(--c-beige);
  h1,
  h2,
  h3 {
    font-family: big-caslon-fb, serif !important;
    color: var(--c-copper);
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4vw;
  }
`
