import styled from 'styled-components'

export const Container = styled.div`
  min-height: 85px;
  position: relative;
  margin: 10px 0px 10px 0px;
  
  & > p{
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
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

export const Sign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0 10px 10px;
`
