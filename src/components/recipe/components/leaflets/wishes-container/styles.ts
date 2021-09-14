import styled from 'styled-components'

export const Container = styled.div`
  min-height: 85px;
  position: relative;
  margin: 10px 0px 10px 0px;
`

export const Card = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`

export const Ava = styled.div`
  align-self: center;
  padding-left: 5px;
`

export const Sign = styled.p`
  font-size: 12px;
  color: gray;
  padding-right: 5px;
`

export const Label = styled.p`
  font-size: 12px;
  padding-right: 5px;
`
