import React from 'react';
import styled from 'styled-components';
import { header_height } from 'components/Header';
import Image from 'components/Image';

const Home = () => (
  <GridGallery>
    <Image url="https://source.unsplash.com/random?nature" />
    <Image url="https://source.unsplash.com/random?water" />
    <Image url="https://source.unsplash.com/random?mountain" />
    <Image url="https://source.unsplash.com/random?desert" />
    <Image url="https://source.unsplash.com/random?jungle" />
    <Image url="https://source.unsplash.com/random?ice" />
    <Image url="https://source.unsplash.com/random?city" />
    <Image url="https://source.unsplash.com/random?space" />
  </GridGallery>
);

const GridGallery = styled.div`
  height: calc(100vh - ${header_height}); /* fill-screen until header */
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60rem, 1fr));
  grid-auto-rows: 50%;
  grid-auto-flow: row dense;
`;

export default Home;
