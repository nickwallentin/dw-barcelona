import styled from "styled-components"

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Wrap, Btn } from "../components/ui"

import Logo from "../assets/svg/symbol.svg"

const Header = ({ modalOpen, setModalOpen }) => (
  <HeaderContainer>
    <Wrap>
      <Link to="/">
        <Logo style={{ width: "40px" }} />
      </Link>
      <div style={{ display: "flex", alignItems: "center" }}>
        <a
          onClick={() => setModalOpen(!modalOpen)}
          style={{
            color: "var(--c-beige)",
            display: "block",
            marginBottom: "0px",
            marginRight: "20px",
          }}
          href="#"
        >
          Info & pris
        </a>
        <Link to="/kontakt" style={{ marginRight: "20px" }}>
          Kontakt
        </Link>
        <Btn
          href="https://airtable.com/shrgepjwaaoiQnE8w"
          rel="noopener noreferrer"
          target="_blank"
          style={{ padding: "5px 15px", marginBottom: "0px" }}
        >
          Boka din plats
        </Btn>
      </div>
    </Wrap>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderContainer = styled.header`
  background: var(--c-green);
  padding: 2.5vh 0px;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    font-style: normal;
    color: var(--c-beige);
  }
`
