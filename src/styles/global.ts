import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  background: #f5f5f5;
  font-size: 14px;
  color: #333;
 
  @font-face {
    font-family: 'ubuntu';
    src: url('Ubuntu-L') format(truetype);
    font-weight: lighter;
    font-style: normal;
  }

  @font-face {
    font-family: 'ubuntu';
    src: url('Ubuntu-M.ttf') format(truetype);
    font-weight: normal;
    font-style: normal;
  }


  @font-face {
    font-family: face;
    src: url();
  }

  font-family: ubuntu;
 }
`;