import { css } from 'styled-components';

/* Media Queries */
const sizes = {
  desktop: 1350,
  medium: 900,
  mobile: 576
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});