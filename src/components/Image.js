import React from 'react';
import styled from 'styled-components';
import { fade_in } from 'style/animations.css';
import withLightBoxContext from 'lightbox/withLightBoxContext';

const imageSizes = [450, 640, 800, 900];

const Image = ({ url, context, delay, imageIndex }) => (
  <ImageContainer delay={delay} onClick={() => context.toggleLightBox(imageIndex)}>
    <Img
      src={url}
      srcSet={imageSizes.map(
        size =>
          `${url}-/progressive/yes/-/format/jpeg/-/resize/${size}/ ${size}w`
      )}
      alt="project"
    />
  </ImageContainer>
);

const Picture = styled.picture`
  overflow: hidden;
  opacity: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  max-width: 1000rem;
`;

/* With animation delay */
const ImageContainer = styled(Picture)`
  animation: 0.4s ${fade_in} ${p => p.delay || 0}ms ease forwards;
`

const Img = styled.img`
  transition: transform 0.15s ease-in;
  object-fit: cover;
  vertical-align: middle;
  min-width: 100%;
  height: 100%;

  &:hover {
    transform: scale(1.4);
  }
`;

export default withLightBoxContext(Image);
