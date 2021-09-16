import styled from 'styled-components'

export const Container = styled.div`
  width: 939px;
  height: 1328px;
  padding: 40px 96px 20px 96px;
  position: relative;
  background-image: url(https://github.com/professorik/data-to-pdf-generator/blob/master/assets/background.png?raw=true);
  &:after{
    content: "";
    display: table;
    clear: both;
  }
`

export const Label = styled.p`
  font-size: 18px;
  font-weight: ${props => props.bold ? "bold;" : "normal;"}
  color: ${props => props.aqua ? "aqua;" : "black;"}
`

export const AdvContainer = styled.div`
  display: flex;
  text-align: justify;
  justify-content: space-between;
  padding: 0 100px 0 100px;
`
