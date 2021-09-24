import styled from 'styled-components'

export const Container = styled.div`
  height: 939px;
  width: 1328px;
  display: block;
  margin: 194px 0px 0px -194px;
  padding: 40px 20px 20px 20px;
  position: relative;
  &:after{
    content: "";
    display: table;
    clear: both;
  }
`

export const Kar = styled.div`
  width: 939px;
  height: 1328px;
  display: block;
  overflow: hidden;
`

export const Item = styled.div`
  float: left;
  width: 50%;
`

export const LeftItem = styled.div`
  float: left;
  width: 40%;
  padding-right: 30px;
`

export const RightItem = styled.div`
  float: left;
  width: 60%;
`

export const IdLabel = styled.p`
  position: absolute;
  color: slategray;
  font-size: 12px;
  top: 0px;
  right: 20px;
`

export const FooterLabel = styled.p`
  position: absolute;
  color: slategray;
  font-size: 12px;
  bottom: 0px;
  left: 20px;
`

export const Logo = styled.image`
  position: absolute;
  bottom: 20px;
  right: 20px;
  height: 40px;
  width: 40px;
`
