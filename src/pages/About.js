import React from 'react';
import styled from 'styled-components';

const About = () => (
  <Container>
    <div className="About">
      <img src="images/profile.jpg" className="About__picture" alt="profile" />
      <h3 className="About__name">Tracy Généreux</h3>
      <p className="About__text">
        Tracy is a concept artist based in Montréal, Canada. Her work experience has
        been mainly on trending mobile games for the past 2 years and more recently on
        the upcoming season 2 of Cosmos, presented by Neil Degrasse Tyson. She has an
        endless passion for everything related to science and fiction, as well as
        creating realistic and stylized worlds of all kinds. She is eager to learn
        anything that can enhance her art, including taking online classes about new
        softwares and concept art techniques to create a seamless workflow. Challenges
        keeps her motivated to improve constantly.
      </p>
    </div>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem;
  
  .About {
    width: 60rem;

    &__picture {
      width: 100%;
    }
  
    &__name {
      margin: 2rem 0;
      align-self: flex-start;
    }
  

  }
`;

export default About;
