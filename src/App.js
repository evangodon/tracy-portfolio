import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';
import LightBoxProvider from 'lightbox/LightBoxProvider';
import Header from './components/Header';
import './style/app.css';
import LightBox from './lightbox/LightBox';

const App = () => (
  <Router>
    <div>
      <LightBoxProvider>
        <Header />
        <Routes />
        <LightBox />
      </LightBoxProvider>
    </div>
  </Router>
);

export default hot(module)(App);
