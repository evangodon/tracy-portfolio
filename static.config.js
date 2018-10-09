import React, { Component } from 'react';
import { ServerStyleSheet } from 'styled-components';

const fs = require('fs');
const matter = require('gray-matter');

const getAboutData = async () => {
  if (!fs.existsSync('./public/content/about.md')) {
    console.error('File about.md not found. Data for about section will be missing.');
    return;
  }

  const data = fs.readFileSync('./public/content/about.md');
  const dataObj = matter(data);
  return dataObj;
};

export default {
  siteRoot: 'https://traci.netlify.com',
  getSiteData: () => ({
    title: 'React Static'
  }),
  getRoutes: async () => {
    const aboutData = await getAboutData();
    return [
      {
        path: '/',
        component: 'src/pages/Portfolio'
      },
      {
        path: '/about',
        component: 'src/pages/About',
        getData: () => ({
          aboutData
        })
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
