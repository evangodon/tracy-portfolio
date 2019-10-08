import React from 'react';
import { NavLink as Link } from 'react-static';
import styled from 'styled-components';
import { fade_in } from 'style/animations.css';
import { media } from 'style/mixins.css';
import ArtStation from './socialMedia/ArtStation';
import LinkedIn from './socialMedia/LinkedIn';
import Logo from './Logo';

const Header = () => (
  <Nav>
    <Logo />
    <h1>Tracy concept art</h1>
    <NavLink exact to="/">
      Portfolio
    </NavLink>
    <NavLink to="/sketches">Sketches</NavLink>
    <NavLink to="/about">About</NavLink>
    <SocialMedia>
      <a href="#">
        <ArtStation />
      </a>
      <a
        href="https://www.linkedin.com/in/tracy-g%C3%A9n%C3%A9reux-248b87104/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn />
      </a>
    </SocialMedia>
  </Nav>
);

export const header_height = '9rem';

const Nav = styled.nav`
  background-color: var(--black);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: ${header_height};
  padding: 0 4rem;
  z-index: var(--z-header);
  animation: ${fade_in} 0.2s ease;
  color: #fff;

  h1 {
    font-size: 2.4rem;
    text-transform: uppercase;
    margin-right: 10rem;
    letter-spacing: 0.05rem;
    font-weight: 300;

    ${media.desktop`
      display: none
    `}
  }
`;

const NavLink = styled(Link)`
  color: var(--black);
  display: inline-block;
  position: relative;
  color: #fff;
  font-weight: 300;

  &:after {
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

  &.active:after {
    transform: scaleX(1);
  }

  & + & {
    margin-left: 1.8rem;
  }
`;

const SocialMedia = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  a + a {
    margin-left: 1.6rem;
  }

  svg {
    transition: opacity 0.3s ease;
  }

  svg:hover {
    cursor: pointer;
    opacity: 0.6;
    fill: #fff;
  }
`;

export default Header;
