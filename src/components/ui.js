import styled from "styled-components"

export const Sec = styled.div`
  padding: ${props => props.space || "5vh 0px"};
  background: ${props => props.bg || "inherit"};
  color: ${props => (props.darkBG ? "var(--c-txt-l)" : "var(--c-txt-dk)")};
  font-family: Georgia, "Times New Roman", Times, serif;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props =>
      props.darkBG ? "var(--c-title-l)" : "var(--c-title-dk)"};
    font-family: big-caslon-fb, serif;
  }
  h1 {
    font-size: var(--f-title-big);
  }
  h2 {
    font-size: var(--f-title-med);
  }

  p {
    font-size: var(--f-p);
    line-height: var(--lh-p);
  }
  a {
    color: var(--c-green);
    text-decoration: underline;
    font-style: italic;
  }
  @media screen and (max-width: 800px) {
    padding: ${props => props.mSpace || "5vh 0px"};
  }
`
export const Wrap = styled.div`
  max-width: 1024px;
  width: 90%;
  margin: 0 auto;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.cols || "1fr"};
  grid-gap: ${props => props.gap || "2vw"};
  z-index: 1;

  @media screen and (max-width: 800px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`

export const Btn = styled.a`
  padding: 15px 30px;
  z-index: 1;
  position: relative;
  display: inline-block;
  background: rgb(220, 152, 112);
  background: -moz-linear-gradient(
    135deg,
    rgba(220, 152, 112, 1) 0%,
    rgba(130, 79, 50, 1) 100%
  );
  background: -webkit-linear-gradient(
    135deg,
    rgba(220, 152, 112, 1) 0%,
    rgba(130, 79, 50, 1) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(220, 152, 112, 1) 0%,
    rgba(130, 79, 50, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#dc9870",endColorstr="#824f32",GradientType=1);
  color: var(--c-beige) !important;
  text-decoration: none !important;
  font-style: normal !important;
  border: 1px solid var(--c-copper-l);
  cursor: pointer;

  @media screen and (max-width: 800px) {
    margin-bottom: 30px;
  }
`
