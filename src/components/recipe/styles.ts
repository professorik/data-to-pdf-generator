import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const UserPage = styled.div`
    &:after{
        content: "";
        display: table;
        clear: both;
    }
`

export const GlobalStyle = createGlobalStyle`
  * {
    margin-left: 0;
    margin-right: 0;
    box-sizing: border-box;
  }
  
  * > p{
    margin: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }
}
`
