import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import { List } from '../ui';
import styled from 'styled-components';
import Thumbnail from '../components/Thumbnail';

const Featured = styled(Link)`
  display: flex;
  flex-wrap: wrap;
`;

const FeaturedImage = styled.div`
  flex: 0 0 100%;

  @media screen and (min-width: 800px) {
    flex: 0 0 33%;
  }
`;

const FeaturedBody = styled.article`
  padding-top: 1em;
  flex: 1;

  @media screen and (min-width: 800px) {
    padding-top: 0;
    padding-left: 1em;
  }
`;

const ProductsPage = ({ data }) => (
  <div>
    <h1>All of our products</h1>

    {Boolean(data.jams) && (
      <div>
        <h2>Jams</h2>

        <List>
          {data.jams.edges.map(({ node }) => (
            <Thumbnail
              key={node.slug}
              slug={node.slug}
              image={node.image}
              title={node.title}
            />
          ))}
        </List>
      </div>
    )}

    {Boolean(data.spreads) && (
      <div>
        <h2>Spreads</h2>

        <List>
          {data.spreads.edges.map(({ node }) => (
            <Thumbnail
              key={node.slug}
              slug={node.slug}
              image={node.image}
              title={node.title}
            />
          ))}
        </List>
      </div>
    )}
  </div>
);

export default ProductsPage;

export const pageQuery = graphql`
  query productsPageQuery {
    jams: allContentfulProduct(filter: { type: { eq: "jam" } }) {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMMM DD, YYYY")
          price
          description {
            childMarkdownRemark {
              html
              excerpt
            }
          }
          image {
            resize(
              quality: 70
              width: 400
              height: 225
              resizingBehavior: FILL
            ) {
              src
            }
          }
        }
      }
    }
    spreads: allContentfulProduct(filter: { type: { eq: "spread" } }) {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMMM DD, YYYY")
          price
          image {
            resize(
              quality: 70
              width: 400
              height: 225
              resizingBehavior: FILL
            ) {
              src
            }
          }
          description {
            childMarkdownRemark {
              html
              excerpt
            }
          }
        }
      }
    }
  }
`;
