import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fafafa;
    color: #6a6359;
    line-height: 1.6;
    font-family: 'Halant', helvetica, sans-serif;
  }

  h3 {
    text-align: center;
    font-size: 42px;
    font-family: 'Roboto Slab', helvetica, sans-serif;
    font-weight: 300;
    line-height: 1.2;
    color: #303030!important;
    padding: 25px 35px 0;
    font-family: 'Roboto Slab', helvetica, sans-serif;
  }

  p {
    margin-bottom: 30px;
    font-size: 1.2rem;
    color: #6a6359;
    font-weight: 400;
    padding: 10px 70px;
  }

`;
 
export default GlobalStyle;