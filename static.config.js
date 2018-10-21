import React, { Component } from 'react';
import { ServerStyleSheet } from 'styled-components';
import { getAboutData, getPortfolioData } from './src/api';

export default {
  siteRoot: 'https://traci.netlify.com',
  getSiteData: () => ({
    title: 'React Static'
  }),
  getRoutes: async () => {
    const aboutData = await getAboutData();
    const portfolioData = await getPortfolioData();
    return [
      {
        path: '/',
        component: 'src/pages/Portfolio',
        getData: () => ({ portfolioData })
      },
      {
        path: '/sketches',
        component: 'src/pages/Sketches',
        getData: () => ({ portfolioData })
      },
      {
        path: '/about',
        component: 'src/pages/About',
        getData: () => ({ aboutData })
      },
      {
        is404: true,
        component: 'src/pages/404'
      }
    ];
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  }
};
