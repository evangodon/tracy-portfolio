import React from 'react';

import { LightBoxContext } from './LightBoxProvider';

const withLightBox = (WrappedComponent) => (props) => (
  <LightBoxContext.Consumer>
    {(context) => <WrappedComponent {...props} context={context} />}
  </LightBoxContext.Consumer>
);

export default withLightBox;
