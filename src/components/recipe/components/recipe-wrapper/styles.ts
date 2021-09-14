import styled from 'styled-components'

export const Container = styled.div`
  width: 1122px;
  height: 794px;
  margin-left: -1.7in;
  margin-right: 1.7in;
  margin-top: 1.7in;
  margin-bottom: 3.4in;
  padding: 40px 20px 20px 20px;
  position: relative;
  background-image: url(https://github.com/professorik/data-to-pdf-generator/blob/master/assets/background.png?raw=true);
  &:after{
    content: "";
    display: table;
    clear: both;
  }
`

export const Kar = styled.div`
  width: 8.3in;
  height: 11.7in;
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
