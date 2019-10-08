import React from 'react';
import styled from 'styled-components';
import { withRouteData } from 'react-static';
import { header_height } from 'components/Header';
import { media } from 'style/mixins.css';

const About = ({ aboutData }) =>
  console.log(aboutData.content) || (
    <Container>
      <div className="About">
        <img
          src={`${aboutData.profile}/-/preview/420x420/-/quality/lighter/`}
          className="About__picture"
          alt="profile"
        />
        <div className="About__text">
          <h3 className="About__name">{aboutData.title}</h3>
          <p className="About__body">{aboutData.content}</p>
        </div>
      </div>
    </Container>
  );

About.defaultProps = {
  aboutData: {
    data: {
      title: 'File about.md was not found',
    },
    content: '',
  },
};

const Container = styled.div`
  height: calc(100vh - ${header_height}); /* fill-screen until header */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem;
  background: #fff;

  .About {
    max-width: 90rem;
    display: flex;
    align-items: center;

    ${media.desktop`
      width: 80%;
      flex-direction: column;
    `};
  }

  .About__picture {
    width: 50%;
    object-fit: cover;
    margin-right: 3.6rem;
    border-radius: 2px;
    border-radius: 50%;
    --size: 20rem;
    min-width: var(--size);
    min-height: var(--size);
    height: var(--size);
    width: var(--size);

    ${media.desktop`
        margin: 5rem 0;
        width: 30%;
        max-width: 30rem;
    `};
  }

  .About__name {
    margin-bottom: 1.6rem;
    align-self: flex-start;
  }

  .About__body {
    max-width: 55rem;
    font-weight: 1.8rem;
  }
`;

export default withRouteData(About);
