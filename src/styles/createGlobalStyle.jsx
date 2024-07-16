import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    html {
        max-width: 100%;
        overflow-x: hidden;
    }
    body {
        overflow-x: hidden;
        position: relative;
        background-color: #56A926;
        height: 2500vh;
    }
    
`

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle