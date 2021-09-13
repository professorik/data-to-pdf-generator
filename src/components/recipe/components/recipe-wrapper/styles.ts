import styled from 'styled-components'

export const Container = styled.div`
  margin-left: -1.7in;
  margin-right: 1.7in;
  &:not(:last-child){
    margin-bottom: 3.4in;
  }
  &:last-child{
    margin-bottom: 1.7in;
  }
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 40px;
  position: relative;
  background-image: url(https://github.com/professorik/data-to-pdf-generator/blob/feature/orientation/assets/background.png?raw=true);
  &:after{
    content: "";
    display: table;
    clear: both;
  }
  width: 11.7in;
  height: 8.3in;
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
