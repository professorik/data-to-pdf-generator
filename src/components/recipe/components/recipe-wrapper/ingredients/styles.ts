import styled from 'styled-components'

export const Container = styled.div`
  margin: 10px 0px 10px 0px;
  &:after{
      content: "";
      display: table;
      clear: both;
  }
`

export const Item = styled.div`
  float: left;
  width: 50%;
`

export const Ingredient = styled.p`
  font-size: 12px;
`

export const Species = styled.p`
  font-size: 12px;
  color: slategrey;
`
