import styled from 'styled-components'

export const Container = styled.div`
  width: 794px;
  height: 1122px;
  padding: 40px 20px 20px 20px;
  position: relative;
  //background-color: purple;
  background-image: url(https://github.com/professorik/data-to-pdf-generator/blob/master/assets/background.png?raw=true);
  &:after{
    content: "";
    display: table;
    clear: both;
  }
  margin-bottom: 1.7in;
`

export const Item = styled.div`
  float: left;
  width: 50%;
`
