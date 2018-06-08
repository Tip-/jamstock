import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/Footer';
import 'sanitize.css';
import './index.css';

const Wrapper = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1em;
  padding-right: 1em;
`;

const Layout = ({ children, data }) => (
  <Wrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css"
      />

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" />

      <script
        src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
        id="snipcart"
        data-api-key="MmE0YjMwZWUtNjcxMy00NDNhLTg5NjItMjI5ZWU5NGNhYjEzNjM2NTM2NzYyMjcyNTM3MzE2"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700"
        rel="stylesheet"
      />

      <link
        href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
        type="text/css"
        rel="stylesheet"
      />
    </Helmet>

    <Header siteTitle={data.site.siteMetadata.title} />

    {children()}

    <Footer />
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
