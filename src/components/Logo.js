import React from 'react';
import styled from 'styled-components';

const Logo = () => (
  <Container>
    <Img src="images/T.png" />
  </Container>
);

const Container = styled.div`
  width: 3rem;
  margin-right: 2rem;
`;

const Img = styled.img`
  max-width: 100%;
`;

export default Logo;
