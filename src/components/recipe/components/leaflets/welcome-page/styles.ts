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
  
  & > p{
    font-size: 18px;
  }
`

export const IdLabel = styled.p`
  position: absolute;
  color: slategray;
  top: 0px;
  right: 20px;
`

export const Logo = styled.image`
  height: 80px;
  width: 80px;
  display: block;
  margin-left: auto;
  margin-right: auto
`

export const ReferralCode = styled.h2`
  color: aqua;
  text-align: center;
`
