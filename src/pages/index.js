import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Header from "../components/header"
import "../components/layout.css"
import SEO from "../components/seo"

import { Sec, Wrap, Grid, Btn } from "../components/ui"

import SymbolTop from "../assets/svg/sec-one-top-left.svg"
import SymbolRight from "../assets/svg/sec-one-right.svg"
import SymbolTwoTop from "../assets/svg/sec-two-top.svg"
import SymbolTwoLeft from "../assets/svg/sec-two-left.svg"
import SymbolTwoBot from "../assets/svg/sec-two-bot.svg"
import SymbolTwoInfoTop from "../assets/svg/sec-two-info-top-right.svg"
import SymbolTwoInfoBot from "../assets/svg/sec-two-info-bot-left.svg"
import SymbolTwoCtaTop from "../assets/svg/sec-two-cta-top-left.svg"
import SymbolTwoCtaBot from "../assets/svg/sec-two-cta-bot-right.svg"

import BlurbOne from "../assets/svg/blurb-1.svg"
import BlurbTwo from "../assets/svg/blurb-2.svg"
import BlurbThree from "../assets/svg/blurb-3.svg"

const IndexPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const data = useStaticQuery(query)
  const images = data.allFile.edges

  const bookLink = "https://airtable.com/shrgepjwaaoiQnE8w"

  return (
    <React.Fragment>
      <SEO title="Barcelona med Dennis Westerberg" />
      <Sec
        space="0px 0px 5vh 0px"
        mSpace="0px 0px 5vh 0px"
        bg="var(--c-green)"
        darkBG
      >
        <Header modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <Wrap>
          <Grid cols="2fr 1fr" style={{ paddingTop: "5vh" }}>
            <div>
              <h1>
                Följ med Dennis Westerberg <br /> på en resa till Barcelona.
              </h1>
              <p>
                Du får möjlighet att kombinera en fördjupning i{" "}
                <a
                  style={{ color: "var(--c-copper)" }}
                  href="https://denniswesterberg.com/de-tre-principerna/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  de tre principerna
                </a>{" "}
                med en avkopplande storstadssemester. Vi möts i underbara
                Barcelona, och spenderar mycket tid tillsammans. Ett unikt
                tillfälle att utforska välmåendet och att uppleva balans och
                sinnesnärvaro som håller i sig över tid.
              </p>
              <Btn href={bookLink} rel="noopener noreferrer" target="_blank">
                Boka din plats
              </Btn>
            </div>
            <Img
              style={{ marginBottom: "-150px", zIndex: "1" }}
              fluid={images[1].node.childImageSharp.fluid}
            />
          </Grid>
        </Wrap>
        <SymbolTop style={{ position: "absolute", top: "0px", left: "0px" }} />
        <SymbolRight
          style={{ position: "absolute", bottom: "0px", right: "0px" }}
        />
      </Sec>
      <Sec mSpace="150px 0px 5vh 0px" bg="var(--c-beige)">
        <Wrap>
          <Grid cols="2fr 1fr">
            <div>
              <h2>
                Vi fokuserar på själslig ro och rekreation, men njuter också av
                den katalanska pärlans utbud.
              </h2>
              <p>
                Det blir ett specialkomponerat schema med de tre principerna som
                huvudingrediens. Dessutom vinprovning, samvaro och god mat.
                Därtill finns det gott om tid att på egen hand utforska staden
                och dess sevärdheter, strandpromenader, marknader m.m.
              </p>
            </div>
          </Grid>
          <div style={{ maxWidth: "750px" }}>
            <Grid cols="1fr 1fr 1fr" gap="20px">
              <Blurb>
                <BlurbOne />
                <h4>Fördjupning</h4>
                <p>
                  Få en unik chans att fördjupa din föreståelse för de tre
                  principerna med Dennis Westerberg.
                </p>
              </Blurb>
              <Blurb>
                <BlurbTwo />
                <h4>Rekreation</h4>
                <p>
                  Tillsammans avnjuter vi god mat, umgås och provar olika
                  sorters vin.
                </p>
              </Blurb>
              <Blurb>
                <BlurbThree />
                <h4>Egentid</h4>
                <p>
                  Utforska staden och dess sevärdheter, strandpromenader,
                  marknader mm.
                </p>
              </Blurb>
            </Grid>
          </div>
        </Wrap>
        <SymbolTwoTop
          className="hide-mobile"
          style={{ position: "absolute", top: "0px", right: "10vw" }}
        />
        <SymbolTwoTop
          className="hide-desktop"
          style={{ position: "absolute", top: "-50px", right: "-35vw" }}
        />
      </Sec>
      <Sec bg="var(--c-beige)">
        <Grid cols="1fr 1fr">
          <Img
            style={{ zIndex: "1", marginBottom: "5vh" }}
            fluid={images[0].node.childImageSharp.fluid}
          />
          <div
            style={{
              maxWidth: "500px",
              width: "90%",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2>
              Vi bor på fantastiska H10 Universitat som ligger supercentralt.
            </h2>
            <p>
              Snyggt hotell med bra läge nära Plaza Catalunya. Härifrån har du
              heller inte långt till Barrio Gotico, Barcelonas historiska
              kvarter, och Paseo de Gracia. The H10 Universitat är inrymt i en
              byggnad från slutet av 1800-talet, som renoverats och byggts om
              till ett modernt hotell med alla bekvämligheter. Det är i
              hotellets rymliga och fräscha lokaler som utbildningen hålls.
            </p>
            <a
              href="https://www.google.com/maps/place/H10+Universitat/@41.3868573,2.1666757,15z/data=!4m8!3m7!1s0x0:0xac0153bb778f81d5!5m2!4m1!1i2!8m2!3d41.3868573!4d2.1666757"
              rel="noreferrer noopener"
              target="_blank"
            >
              Öppna kartan
            </a>
          </div>
        </Grid>
      </Sec>
      <Sec bg="var(--c-beige)">
        <Wrap>
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <h2>Detta ingår i resan</h2>
            <p>
              Resepaketet är fullspäckat med goda måltider, gott om tid för
              avslappning och givetvis en unik utbildning i de tre principerna
              tillsammans med Dennis Westerberg.
            </p>
          </div>
          <Grid cols="1fr 1fr 1fr 1fr">
            <Blurb>
              <BlurbTwo />
              <h4>Utbildning</h4>
              <p>
                En utbildning som fokuserar på ett välmående som håller i sig
                över tid. En möjlighet att vara i balans med sig själv, trots
                att världen då och då hamnar i obalans.
              </p>
            </Blurb>
            <Blurb>
              <BlurbTwo />
              <h4>Övernattning</h4>
              <p>
                Övernattning i tre nätter på hotell H10 Universitat i centrala
                Barcelona – del i dubbelrum. Ifall du önskar ett eget rum, finns
                det möjlighet att göra en tilläggsbeställning vid bokningen.
              </p>
            </Blurb>
            <Blurb>
              <BlurbTwo />
              <h4>Frukost</h4>
              <p>
                I priset ingår en härlig frukostbuffé varje dag, kl. 9 – 10.
              </p>
            </Blurb>
            <Blurb>
              <BlurbTwo />
              <h4>Kvällsmiddag</h4>
              <p>
                En av kvällarna äter vi en gemensam middag tillsammans, och
                njuter av sällskapet.
              </p>
            </Blurb>
            <Blurb>
              <BlurbTwo />
              <h4>Vinprovning</h4>
              <p>
                Vi beger oss iväg på vinprovning, och får smaka på de olika
                vinerna som Katalonien och Spanien erbjuder. Vi får lära oss
                allt om vinframställningsprocessen och umgås i en avslappnad och
                informell miljö.
              </p>
            </Blurb>
            <Blurb>
              <BlurbTwo />
              <h4>Frukt, kaffe och te</h4>
              <p>Vi har fri tillgång till frukt, kaffe och te alla dagarna.</p>
            </Blurb>
            <Blurb>
              <BlurbTwo />
              <h4>Transfer</h4>
              <p>
                Vi ser till att ni hämtas och lämnas på flygplatsen i Barcelona
                – allt för att göra resan enkel och extra bekväm.
              </p>
            </Blurb>
            <GetInfo>
              <h4 style={{ zIndex: "1" }}>Praktisk information</h4>
              <p style={{ zIndex: "1" }}>
                Klicka här för att se pris samt all praktiskt infomation för
                resan.
              </p>
              <a
                onClick={() => setModalOpen(!modalOpen)}
                style={{ zIndex: "1" }}
                href="#"
              >
                Klicka här
              </a>
              <SymbolTwoInfoTop
                style={{ position: "absolute", top: "0", right: "0" }}
              />
              <SymbolTwoInfoBot
                style={{ position: "absolute", bottom: "0", left: "0" }}
              />
            </GetInfo>
          </Grid>
          <Line style={{ marginTop: "40px" }} />
          <div
            style={{
              textAlign: "center",
              fontStyle: "italic",
              marginTop: "40px",
            }}
          >
            <p>
              Var och en bokar sin egen flygresa, till och från Barcelona.
              <br />
              Önskas enkelrum så tillkommer en kostnad på 2000 kr.
            </p>
          </div>
        </Wrap>
        <SymbolTwoLeft
          className="hide-mobile"
          style={{ position: "absolute", top: "-75%", left: "0" }}
        />
        <SymbolTwoLeft
          className="hide-desktop"
          style={{
            position: "absolute",
            top: "-49%",
            left: "-50px",
            transform: "scale(.8)",
          }}
        />
      </Sec>
      <Sec bg="var(--c-beige)">
        <Wrap>
          <CTA>
            <h2 style={{ zIndex: "1" }}>Boka din plats idag</h2>
            <p style={{ zIndex: "1", marginBottom: "10px" }}>
              Boka din plats genom att klicka på knappen nedan och fyll i
              formuläret. Efter din bokning skickar vi ett välkomstmail med
              ytterliggare information, samt en faktura.
            </p>
            <small style={{ display: "block", zIndex: "1" }}>
              <em
                style={{ zIndex: "1", marginBottom: "10px", display: "block" }}
              >
                Är ni fler som reser tillsammans, får ni göra en bokning vardera
                per person.
              </em>
              <a
                onClick={() => setModalOpen(!modalOpen)}
                style={{
                  color: "var(--c-beige)",
                  display: "block",
                  marginBottom: "20px",
                }}
                href="#"
              >
                Praktiskt information & pris
              </a>
            </small>

            <Btn href={bookLink} rel="noopener noreferrer" target="_blank">
              Boka din plats idag
            </Btn>
            <SymbolTwoCtaTop
              style={{ position: "absolute", top: "0", left: "0" }}
            />
            <SymbolTwoCtaBot
              style={{ position: "absolute", bottom: "0", right: "0" }}
            />
          </CTA>
          <p
            style={{ textAlign: "center", display: "block", marginTop: "50px" }}
          >
            <em>
              {" "}
              Denna resa är ett samarbete mellan Dennis Westerberg och Creandia.
            </em>
          </p>
        </Wrap>
        <SymbolTwoBot
          style={{
            position: "absolute",
            bottom: "0",
            left: "calc(50% - 478px)",
          }}
        />
      </Sec>
      {modalOpen && (
        <InfoModal>
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
        </InfoModal>
      )}
    </React.Fragment>
  )
}

export default IndexPage

const Blurb = styled.div`
  h4 {
    margin-bottom: 10px;
    margin-top: 20px;
  }
`
const Line = styled.div`
  width: 100%;
  height: 2px;
  background: var(--c-beige-dk);
`
const CTA = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: var(--c-green);
  color: var(--c-beige);
  padding: 40px;
  text-align: center;
  z-index: 1;
  border-radius: 10px;
  h2 {
    color: var(--c-title-l);
  }
`
const GetInfo = styled.div`
  background: var(--c-green);
  padding: 25px;
  color: var(--c-beige);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  p {
    font-size: 12px;
    line-height: 18px;
  }
  h4 {
    margin-bottom: 10px;
    color: var(--c-copper);
  }
  a {
    color: var(--c-beige);
  }
`

const InfoModal = styled.div`
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

const query = graphql`
  query getImages {
    allFile(filter: { extension: { eq: "png" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
