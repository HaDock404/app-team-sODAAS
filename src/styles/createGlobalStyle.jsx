import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    html {
        max-width: 100%;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle