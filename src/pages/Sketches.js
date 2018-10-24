import React from 'react';
import withLightBoxContext from 'lightbox/withLightBoxContext';
import { GridGallery } from './Portfolio';

const Sketches = () => (
  <GridGallery>
    <div>Hey</div>
  </GridGallery>
);

export default withLightBoxContext(Sketches);
