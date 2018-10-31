import React, { Component } from 'react';

export const LightBoxContext = React.createContext();

class LightBoxProvider extends Component {
  state = {
    lightBoxOpen: false,
    image: '',
  };

  toggleLightBox = image => {
    this.setState({ lightBoxOpen: !this.state.lightBoxOpen, image });
  };

  render() {
    return (
      <LightBoxContext.Provider
        value={{
          lightBoxOpen: this.state.lightBoxOpen,
          image: this.state.image,
          toggleLightBox: this.toggleLightBox,
        }}
      >
        {this.props.children}
      </LightBoxContext.Provider>
    );
  }
}

export default LightBoxProvider;
