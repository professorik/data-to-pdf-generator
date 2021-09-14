import styled from 'styled-components'

export const Container = styled.div`
  width: 794px;
  height: 1122px;
  padding: 40px 96px 20px 96px;
  position: relative;
  background-color: green;
  background-image: url(https://github.com/professorik/data-to-pdf-generator/blob/feature/orientation/assets/background.png?raw=true);
  &:after{
    content: "";
    display: table;
    clear: both;
  }
`

export const Label = styled.p`
  font-size: 12px;
`

export const IdLabel = styled.p`
  position: absolute;
  color: slategray;
  font-size: 12px;
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

export const ReferralCode = styled.h3`
  color: aqua;
  text-align: center;
`
