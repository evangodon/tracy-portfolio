import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';
import styled from 'styled-components';
import AnimatedRoutes from './AnimatedRoutes';
import Header from './components/Header';
import './style/app.css';

const App = () => (
  <Router>
    <div>
      <Header />
      <Content>
        <Routes component={AnimatedRoutes} />
      </Content>
    </div>
  </Router>
);

const Content = styled.main``;

export default hot(module)(App);
