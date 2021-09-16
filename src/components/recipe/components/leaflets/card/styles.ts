import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 10px;
  background-color: #dcfefa;
  height: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Label = styled.p`
  font-size: ${props => props.bold ? "18px;" : "14px;"}
  font-weight: ${props => props.bold ? "bold;" : "normal;"}
`
