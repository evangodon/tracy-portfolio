import React, { Component } from 'react';

export const LightBoxContext = React.createContext();

class LightBoxProvider extends Component {
  state = {
    lightBoxOpen: false,
    imageID: 0,
    imageData: [],
  };

  toggleLightBox = imageID => {
    this.setState({
      imageID,
      lightBoxOpen: !this.state.lightBoxOpen,
    });
  };

  updateLightBoxImages = imageData => {
    this.setState({ imageData });
  };

  activateSlide = direction => {
    const { imageData } = this.state;
    let newImageID =
      (this.state.imageID + (direction === 'left' ? -1 : 1)) %
      (imageData.length);

    if (newImageID < 0) {
      newImageID = imageData.length - 1;
    }

    this.setState({ imageID: newImageID });
  };

  render() {
    return (
      <LightBoxContext.Provider
        value={{
          lightBoxOpen: this.state.lightBoxOpen,
          imageID: this.state.imageID,
          imageData: this.state.imageData,
          toggleLightBox: this.toggleLightBox,
          updateLightBoxImages: this.updateLightBoxImages,
          activateSlide: this.activateSlide,
        }}
      >
        {this.props.children}
      </LightBoxContext.Provider>
    );
  }
}

export default LightBoxProvider;
