import React from 'react';
import styled from 'styled-components';
import { withRouteData } from 'react-static';
import { header_height } from 'components/Header';
import Image from 'components/Image';

const Portfolio = ({ portfolioData }) => (
  <GridGallery>
    {(portfolioData || []).map((project, index) => (
      <Image key={index} url={project.portfolio_image} />
    ))}
  </GridGallery>
);

export const GridGallery = styled.div`
  height: calc(100vh - ${header_height}); /* fill-screen until header */
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(55rem, 1fr));
  grid-auto-rows: minmax(28rem, 50%);
  grid-auto-flow: row dense;
`;

export default withRouteData(Portfolio);
