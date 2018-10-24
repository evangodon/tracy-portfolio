import React, { Component } from 'react';

export const LightBoxContext = React.createContext();

class LightBoxProvider extends Component {
  state = {
    lightBoxOpen: false
  };

  toggleLightBox = () => {
    this.setState({ lightBoxOpen: !this.state.lightBoxOpen });
  };

  render() {
    return (
      <LightBoxContext.Provider
        value={{
          lightBoxOpen: this.state.lightBoxOpen,
          toggleLightBox: this.toggleLightBox
        }}
      >
        {this.props.children}
      </LightBoxContext.Provider>
    );
  }
}

export default LightBoxProvider;
