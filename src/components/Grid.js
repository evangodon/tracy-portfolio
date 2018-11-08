import styled from 'styled-components';
import { header_height } from 'components/Header';
import { media } from 'style/mixins.css';

const Grid = styled.div`
  height: calc(100vh - ${header_height}); /* fill-screen until header */
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(52rem, 1fr));
  grid-auto-rows: minmax(40rem, 50%);
  grid-auto-flow: row dense;
  background: linear-gradient(to right bottom, #232526, #414345);

  ${media.mobile`
      grid-auto-rows: minmax(25rem, 50%);
  `}
`;

export default Grid;
