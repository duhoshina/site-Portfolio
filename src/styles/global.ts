import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  background: #23252f;
  font-size: 14px;
  color: #f3f3f3;
 
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

  a {
    text-decoration: none;
  }

  font-family: ubuntu;
 }
`;