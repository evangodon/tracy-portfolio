import React from 'react';
import styled from 'styled-components';
import { withRouteData } from 'react-static';
import { header_height } from 'components/Header';
import { media } from 'style/mixins.css';

const About = ({ aboutData }) => (
  <Container>
    <div className="About">
      <img src="images/profile.jpg" className="About__picture" alt="profile" />
      <div className="About__text">
        <h3 className="About__name">{aboutData.title}</h3>
        <p className="About__body">
          {aboutData.content}
        </p>
      </div>
    </div>
  </Container>
);

About.defaultProps = {
  aboutData: {
    data: {
      title: 'File about.md was not found'
    },
    content: ''
  }
}

const Container = styled.div`
  height: calc(100vh - ${header_height}); /* fill-screen until header */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem;
  background: #fff;

  .About {
    max-width: 120rem;
    display: flex;
    align-items: center;


    &__picture {
      width: 50%;
      object-fit: contain;
      margin-right: 2.8rem;
      border-radius: 2px;
    }

    &__name {
      margin-bottom: 1.6rem;
      align-self: flex-start;
    }

    &__body {
      max-width: 65rem;
    }

    ${media.desktop`
      width: 100%;
      flex-direction: column;

      &__picture {
        margin: 5rem 0;
        width: 100%;
        max-width: 65rem;
      }
    `}
  }
`;

export default withRouteData(About);
