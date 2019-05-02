/* eslint-disable */

/* MODULES */
import { createGlobalStyle } from 'styled-components'

// eslint-disable-next-line no-unused-expression
export default createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
    -webkit-tap-highlight-color: none;
  }
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {
    position: fixed;
    height: 100%;
    width: 100%;
    background: ${props => props.theme.bgColor};
    font-size: 10px;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }
  body {
    min-width: 320px;
    width: 100vw;
    height: 100%;
    line-height: 1;
    font-family: OpenSansRegular, sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    overflow-x: hidden;
    color: ${props => props.theme.textColor};
     -webkit-overflow-scrolling: touch;
    &.hidden {
      overflow-y: hidden;
    }
    &.hidden-modal div {
      overflow: hidden !important;
    }
    &.body-scroll-y {
      overflow-y: scroll;
    }
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    outline: none;
    &:focus,
    &:active {
      outline: none;
    }
  }
  a:hover {
    text-decoration: none;
  }
  button {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: none;
  }
  h1, h2, h3, h4, h5, h6, ul, li, a, img, input, button, textarea {
    margin: 0;
    padding: 0;
    overline: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  img {
    border: 0;
  }
  input,
  textarea {
    outline: none;
  }
  button,
  input,
  textarea {
    background: transparent;
    //transition: all 0.3s ease-in-out;
    padding: 0;
    font-family: OpenSansRegular;
    font-weight: 400;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus
  input:-webkit-autofill {
    -webkit-text-fill-color: inherit !important;
    -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.transparent} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    background-color: ${props => props.theme.transparent};
    background-image: none;
    color: ${props => props.theme.textColor};
  }
  textarea {
    font-family: OpenSansRegular;
    font-weight: 400;
  }
  input, textarea {
    -webkit-user-select: text;
    -khtml-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }
  button:focus,
  button:active,
  input:focus, 
  input:active {
    outline: none;
  }
  .Collapsible__trigger {
    & > div > div {
      transform: rotate(180deg);
    }
    &.is-open {
      & > div > div {
      transform: rotate(0);
    }
    }
  }
`;
