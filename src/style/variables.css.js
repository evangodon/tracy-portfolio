import { injectGlobal, css } from 'styled-components';

const sizes = {
  xlarge: 1400,
  medium: 900,
  small: 576
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

injectGlobal`
  :root {
    /* Colours */
    --white: #FFF;
    --black: #212121;
    --light-gray: #ECEFF1;
    --bg-color: #222;

    /* Z-indexes*/
    --z-header: 100;

  }
`;
