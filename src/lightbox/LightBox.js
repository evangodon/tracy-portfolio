import React, { Component } from 'react';
import styled from 'styled-components';
import { fade_in } from 'style/animations.css';
import withLightBoxContext from './withLightBoxContext';

class LightBox extends Component {
  state = {
    imageLoaded: false,
  };

  handleImageLoad = () => {
    this.setState({ imageLoaded: true });
  };

  render() {
    const { context } = this.props;

    if (!context.lightBoxOpen) {
      return null;
    }

    return (
      <Container>
        <Overlay onClick={context.toggleLightBox} />
        <Image
          src={context.image}
          onLoad={this.handleImageLoad}
          loaded={this.state.imageLoaded}
          alt="project"
        />
      </Container>
    );
  }
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;

const Image = styled.img`
  display: ${({ loaded }) => (loaded ? 'block' : 'none')};
  position: absolute;
  max-width: 180rem;
  max-height: 90rem;
  z-index: var(--z-lightbox-image);

  ${({ loaded }) => loaded && `animation: 0.3s ${fade_in} ease;`};
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: var(--z-lightbox-overlay);
  cursor: pointer;
  animation: 0.3s ${fade_in} ease;
`;

export default withLightBoxContext(LightBox);
