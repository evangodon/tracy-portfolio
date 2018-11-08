import React from 'react';
import { withRouteData } from 'react-static';
import ImageGallery from 'components/ImageGallery';

const Sketches = ({ sketchesData }) => (
  <ImageGallery imageData={sketchesData} />
);

export default withRouteData(Sketches);
