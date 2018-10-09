import { injectGlobal } from 'styled-components';
import * as variables from './variables.css';

const { media } = variables;

injectGlobal`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;

    ${media.xlarge`
      font-size: 50%;
    `}
  }

  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
  }
  
  a {
    text-decoration: none;
    font-weight: bold;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.8em;
    letter-spacing: 0.04em;
  }
`;
