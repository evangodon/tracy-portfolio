import React from 'react';
import styled from 'styled-components';
import { fade_in } from 'style/animations.css';

const Image = ({ url }) => (
  <Container>
    <img src={url} className="grid__image" alt="project" />
  </Container>
);

const Container = styled.div`
  overflow: hidden;
  animation: ${fade_in} 0.4s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;

  .grid__image {
    transition: transform 0.2s ease;
    object-fit: cover;
    vertical-align: middle;
    min-width: 100%;
    height: 100%;
  }

  .grid__image:hover {
    transform: scale(1.2);
  }
`;

export default Image;
