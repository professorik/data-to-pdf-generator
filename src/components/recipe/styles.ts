import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const UserPage = styled.div`
    &:not(:first-child){
        margin-top: 1.7in;
        background-color: blue;
    }
    &:after{
        content: "";
        display: table;
        clear: both;
    }
`

export const GlobalStyle = createGlobalStyle`
  * {
    margin: auto 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }
}
`
