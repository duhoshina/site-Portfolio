import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  background: #ffffff;
  font-size: 14px;
  color: #263238;
  overflow-x: hidden;
 
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

  a {
    text-decoration: none;
  }

  font-family: ubuntu;
 }
`;