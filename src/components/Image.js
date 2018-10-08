import React from 'react';
import styled, { keyframes } from 'styled-components';

const Image = ({ url }) => (
  <Container>
    <img src={url} className="grid__image" alt="project" />
  </Container>
);

export const fadeIn = keyframes`
  from { opacity: 0;}
  to { opacity: 1;}
`;

const Container = styled.div`
  overflow: hidden; 
  animation: ${fadeIn} .6s ease;
  cursor: pointer;

  .grid__image {
    transition: transform 0.2s ease;
    object-fit: contain;
  }
  
  .grid__image:hover {
    transform: scale(1.4);
  }
`;

export default Image;