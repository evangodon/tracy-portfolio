import React from 'react';
import styled from 'styled-components';
import { fade_in } from 'style/animations.css';
import withLightBoxContext from 'lightbox/withLightBoxContext';

const Image = ({ url, context, delay }) => (
  <Container delay={delay} onClick={() => context.toggleLightBox(url)}>
    <img
      src={url}
      className="grid__image"
      alt="project"
    />
  </Container>
);

const Container = styled.div`
  overflow: hidden;
  opacity: 0;
  animation: 0.4s ${fade_in} ${({ delay }) => delay}ms ease forwards;
  cursor: pointer;
  display: flex;
  justify-content: center;
  max-width: 100rem;

  .grid__image {
    transition: transform 0.15s ease-in;
    object-fit: cover;
    vertical-align: middle;
    min-width: 100%;
    height: 100%;
  }

  .grid__image:hover {
    transform: scale(1.4);
  }
`;

export default withLightBoxContext(Image);
