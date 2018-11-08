import React, { Component } from 'react';
import Grid from 'components/Grid';
import Image from 'components/Image';
import withLightBoxContext from 'lightbox/withLightBoxContext';

class ImageGallery extends Component {
  componentDidMount() {
    const {
      imageData,
      context: { updateLightBoxImages },
    } = this.props;

    updateLightBoxImages(imageData);
  }

  render() {
    return (
      <Grid>
        {(this.props.imageData || []).map((project, index) => ( console.log(project.image_url) || 
          <Image
            key={index}
            imageIndex={index}
            url={project.image_url}
            delay={50 + index * 50}
          />
        ))}
      </Grid>
    );
  }
}

export default withLightBoxContext(ImageGallery);
