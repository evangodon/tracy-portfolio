import React from 'react';
import { NavLink } from 'react-static';
import styled from 'styled-components';
import { fade_in } from 'style/animations.css';

const Header = () => (
  <Nav>
    <h1>Tracy concept art</h1>
    <NavLink exact to="/">
      Portfolio
    </NavLink>
    <NavLink to="/sketches">Sketches</NavLink>
    <NavLink to="/about">About</NavLink>
  </Nav>
);

export const header_height = '10rem';

const Nav = styled.nav`
  background-color: var(--light-gray);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: ${header_height};
  padding: 0 4rem;
  z-index: var(--z-header);
  animation: ${fade_in} 0.2s ease;

  h1 {
    font-size: 3.4rem;
    text-transform: uppercase;
    margin-right: 2.8rem;
    letter-spacing: 0.05rem;
  }

  a {
    color: var(--black);
    display: inline-block;
    position: relative;
  }

  a:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    border-bottom: 2px solid currentColor;
    height: 1px;
    width: 100%;
    transform: scaleX(0);
    transform-origin: left;
    transition: 0.2s cubic-bezier(1, 0, 0, 1) 0.16s;
  }

  .active:after {
    transform: scaleX(1);
  }

  a + a {
    margin-left: 1.8rem;
  }
`;

export default Header;
