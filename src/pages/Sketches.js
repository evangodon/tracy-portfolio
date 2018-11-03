import React from 'react';
import { withRouteData } from 'react-static';
import Image from 'components/Image';
import { GridGallery } from './Portfolio';

const Sketches = ({sketchesData}) => (
  <GridGallery>
    {(sketchesData || []).map((project, index) => (
      <Image key={index} url={project.sketch_image} delay={index * 50}/>
    ))}
  </GridGallery>
);

export default withRouteData(Sketches);
