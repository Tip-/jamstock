import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import { List } from '../ui';
import styled from 'styled-components';
import Thumbnail from '../components/Thumbnail';
import tail from 'lodash/tail';

const Wrapper = styled.main`
  padding-bottom: 2em;
`;

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

const SeeAllLink = styled(Link)`
  text-align: right;
  display: block;
`;

const IndexPage = ({ data }) => (
  <Wrapper>
    <h1>That’s our new jam!</h1>

    {data.lastProduct.edges.map(({ node }) => (
      <Featured key={node.slug} to={`/jams/${node.slug}`}>
        <FeaturedImage>
          <img src={node.image.resize.src} />
        </FeaturedImage>

        <FeaturedBody>
          <h2>{node.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: node.description.childMarkdownRemark.html,
            }}
          />
        </FeaturedBody>
      </Featured>
    ))}

    {Boolean(data.products) && (
      <div>
        <h2>That’s our not-so-new jams</h2>

        <List>
          {tail(data.products.edges).map(({ node }) => (
            <Thumbnail
              key={node.slug}
              slug={node.slug}
              image={node.image}
              title={node.title}
            />
          ))}
        </List>

        <SeeAllLink to="/products">See all products</SeeAllLink>
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
  </Wrapper>
);

export default IndexPage;

export const pageQuery = graphql`
  query indexPageQuery {
    lastProduct: allContentfulProduct(
      limit: 1
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          description {
            childMarkdownRemark {
              html
            }
          }
          image {
            resize(
              quality: 80
              width: 600
              height: 600
              resizingBehavior: FILL
            ) {
              src
            }
          }
        }
      }
    }
    products: allContentfulProduct(
      limit: 4
      sort: { fields: [createdAt], order: DESC }
    ) {
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
  }
`;
