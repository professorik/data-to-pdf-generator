import styled from 'styled-components'

export const Card = styled.div`
   width: 140px;
   height: 200px;
   text-align:center;
`

export const Label = styled.p`
  font-size: ${props => props.bold ? "18px;" : "14px;"};
  font-weight: ${props => props.bold ? "bold;" : "normal;"}
`
