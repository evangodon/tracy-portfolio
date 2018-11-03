import React, { Component } from 'react';
import styled from 'styled-components';
import { fade_in, scale_up } from 'style/animations.css';
import { media } from 'style/mixins.css';
import withLightBoxContext from './withLightBoxContext';

const LEAVE_DURATION = 300;


class LightBox extends Component {
  state = {
    imageLoaded: false,
    leaveAnimate: false,
  };

  static getDerivedStateFromProps(props, state) {
    if (!props.context.lightBoxOpen) {
      return { imageLoaded: false, leaveAnimate: false };
    }
    return state;
  }

  handleImageLoad = () => {
    this.setState({ imageLoaded: true });
  };

  handleOverlayClick = () => {
    this.setState({ leaveAnimate: true });
    this.timer = setTimeout(() => {
      this.props.context.toggleLightBox();
    }, LEAVE_DURATION);
  };

  render() {
    const { context } = this.props;

    if (!context.lightBoxOpen) {
      clearTimeout(this.timer);
      return null;
    }

    // TODO: Add Description of image, close icon, arrows
    return (
      <Container leaveAnimate={this.state.leaveAnimate}>
        <Overlay onClick={this.handleOverlayClick} />
        <Image
          src={context.image}
          onLoad={this.handleImageLoad}
          loaded={this.state.imageLoaded}
          leaveAnimate={this.state.leaveAnimate}
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
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: var(--z-lightbox-overlay); 

  ${({ leaveAnimate }) =>
    leaveAnimate &&
    `animation: .28s ${fade_in} ease-out reverse forwards;
    `};
`;

const Image = styled.img`
  display: ${({ loaded }) => (loaded ? 'block' : 'none')};
  position: absolute;
  max-width: 180rem;
  width: 70vw;
  z-index: var(--z-lightbox-image);

  ${({ loaded }) =>
    loaded &&
    ` animation: .4s ${fade_in} ease,
    .3s ${scale_up} ease;
  `};

  ${media.mobile`
    width: 90vw;
  `};
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: var(--z-lightbox-overlay);
  cursor: pointer;
  will-change: opacity;
  animation: 0.3s ${fade_in} ease;

`;

export default withLightBoxContext(LightBox);
