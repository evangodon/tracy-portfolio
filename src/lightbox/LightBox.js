import React, { Fragment } from 'react';
import styled from 'styled-components';
import withLightBoxContext from './withLightBoxContext';

const LightBox = ({ context }) => {
  if (!context.lightBoxOpen) {
    return null;
  }

  return (
    <Fragment>
      <StyledBox />
      <Overlay onClick={context.toggleLightBox} />
    </Fragment>
  );
};

const StyledBox = styled.div`
  color: #fff;
  position: absolute;
  right: 0;
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
`;

export default withLightBoxContext(LightBox);
