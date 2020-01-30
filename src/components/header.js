import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"
import { Wrap } from "../components/ui"

import Logo from "../assets/svg/symbol.svg"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Wrap>
      <Logo style={{ width: "40px" }} />
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
  padding: 2.5vh;
`
