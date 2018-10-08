import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';

const Header = () => (
  <Nav>
    <h1>Tracy concept art</h1>
    <Link exact to="/">
      Portfolio
    </Link>
    <Link to="/about">About</Link>
  </Nav>
);

export const HEADER_HEIGHT = '10rem';

const Nav = styled.nav`
  background-color: var(--light-gray);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: ${HEADER_HEIGHT};
  padding: 0 4rem;
  z-index: var(--z-header);

  h1 {
    font-size: 3.4rem;
    text-transform: uppercase;
    margin-right: 2.8rem;
    letter-spacing: 0.05rem;
  }

  a {
    color: var(--black);
    padding: 1rem;
    display: inline-block;
  }

  a + a {
    margin-left: 1rem;
  }
`;

export default Header;
