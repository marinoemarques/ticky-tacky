import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  body {
    font-family: "Open Sans", Verdana, sans-serif;
    color: DarkSlateGray;
    margin: 0;
    padding: 0;
    text-align: center;
  }
`

export default GlobalStyle
