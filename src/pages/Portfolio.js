import React from 'react';
import { withRouteData } from 'react-static';
import ImageGallery from 'components/ImageGallery';

const Portfolio = ({portfolioData}) => (
  <ImageGallery imageData={portfolioData} />
)

export default withRouteData(Portfolio);
