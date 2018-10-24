import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';
import styled from 'styled-components';
import LightBoxProvider from 'lightbox/LightBoxProvider';
import AnimatedRoutes from './AnimatedRoutes';
import Header from './components/Header';
import './style/app.css';
import LightBox from './lightbox/LightBox';

const App = () => (
  <Router>
    <div>
      <LightBoxProvider>
        <Header />
        <Content>
          <Routes component={AnimatedRoutes} />
        </Content>
        <LightBox />
      </LightBoxProvider>
    </div>
  </Router>
);

const Content = styled.main``;

export default hot(module)(App);
