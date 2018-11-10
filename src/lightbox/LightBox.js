import React, { Component } from 'react';
import styled from 'styled-components';
import { fade_in, scale_up } from 'style/animations.css';
import { media } from 'style/mixins.css';
import Icon, { icons } from 'components/Icons';
import withLightBoxContext from './withLightBoxContext';

const LEAVE_DURATION = 300;
const IMAGE_SIZES = [450, 800, 1200, 1500];

class LightBox extends Component {
  state = {
    leaveAnimate: false,
    imageStatus: null, 
  };

  static getDerivedStateFromProps(props, state) {
    if (!props.context.lightBoxOpen) {
      return { imageLoaded: false, leaveAnimate: false };
    }
    return state;
  }

  handleClose = () => {
    this.setState({ leaveAnimate: true });
    this.timer = setTimeout(() => {
      this.props.context.toggleLightBox();
    }, LEAVE_DURATION);
  };

  render() {
    const { context } = this.props;
    const { imageID, imageData } = context;

    if (!context.lightBoxOpen) {
      clearTimeout(this.timer);
      return null;
    }

    const url = imageData[imageID].image_url;

    return (
      <Container leaveAnimate={this.state.leaveAnimate}>
        <Overlay onClick={this.handleClose} />
        <Icon
          icon={icons.leftArrow}
          className="arrow-left"
          onClick={() => context.activateSlide('left')}
        />
        <Image
          src={url}
          srcSet={IMAGE_SIZES.map(
            size =>
              `${url}-/progressive/yes/-/format/jpeg/-/quality/lighter/-/resize/${size}/ ${size}w`
          )}
          onLoad={this.handleImageLoad}
          leaveAnimate={this.state.leaveAnimate}
          alt="project"
        />
        <Icon
          icon={icons.rightArrow}
          className="arrow-right"
          onClick={context.activateSlide}
        />
        <Icon
          icon={icons.exit}
          className="exit"
          size={60}
          onClick={this.handleClose}
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
  justify-content: space-evenly;
  align-items: center;
  z-index: var(--z-lightbox-overlay);
  color: #fff;

  ${({ leaveAnimate }) =>
    leaveAnimate &&
    `animation: .18s ${fade_in} ease-out reverse forwards;
    `};

  .arrow-left,
  .arrow-right,
  .exit {
    z-index: var(--z-lightbox-image);
    transition: opacity 0.1s ease;

    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }

  .arrow-left {
    left: 5vw;
  }

  .arrow-right {
    right: 5vw;
  }

  .exit {
    position: absolute;
    top: 3rem;
    right: 3rem;
  }

  ${media.desktop`
    .arrow-left { left: 2rem; }
    .arrow-right { right: 2rem; }
  `};

  ${media.mobile`
    .arrow-left,.arrow-right {
        position: absolute;
    }
    .arrow-left { bottom: 10rem; }
    .arrow-right { bottom: 10rem; }
    .exit { display: none; }
  `};
`;

const Image = styled.img`
  max-width: 180rem;
  width: 70vw;
  z-index: var(--z-lightbox-image);
  user-select: none;

  ${p => p.loaded &&
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
