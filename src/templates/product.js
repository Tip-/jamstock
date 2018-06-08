import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { List } from '../ui';
import currencyFormatter from 'currency-formatter';
import Thumbnail from '../components/Thumbnail';

const Button = styled.button`
  background-color: #000;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  padding: 0.5em 0.75em;
  border-radius: 4px;
  border: 0;
  outline: none;
  display: inline-block;
  margin-top: 1em;
  font-size: 1.189em;
`;

const PriceContainer = styled.div`
  h2 {
    display: inline-block;
  }
`;

const Price = styled.span`
  font-size: 1.414em;
`;

const Featured = styled.article`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2em;
`;

const FeaturedImage = styled.div`
  flex: 0 0 100%;

  @media screen and (min-width: 800px) {
    flex: 0 0 33.333%;
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

class Product extends Component {
  render() {
    const {
      id,
      title,
      createdAt,
      description,
      relatedProducts,
      price,
      slug,
      image,
    } = this.props.data.contentfulProduct;

    return (
      <div>
        <h1>{title}</h1>

        <Featured>
          <FeaturedImage>
            <img src={image.resize.src} />
          </FeaturedImage>

          <FeaturedBody>
            <div
              dangerouslySetInnerHTML={{
                __html: description.childMarkdownRemark.html,
              }}
            />

            <PriceContainer>
              <h2>Price:</h2>{' '}
              <Price>{currencyFormatter.format(price, { code: 'USD' })}</Price>
            </PriceContainer>

            <Button
              className="snipcart-add-item"
              data-item-id={id}
              data-item-name={title}
              data-item-price={price}
              data-item-url={`https://jamstock.netlify.com/jams/${slug}`}
              data-item-weight="20"
              data-item-description={description.childMarkdownRemark.excerpt}
            >
              Add to cart
            </Button>
          </FeaturedBody>
        </Featured>

        {relatedProducts && (
          <div>
            <h2>Related products</h2>

            <List>
              {(relatedProducts || []).map(({ title, slug, image }) => (
                <Thumbnail key={slug} {...{ title, slug, image }} />
              ))}
            </List>
          </div>
        )}
      </div>
    );
  }
}

Product.PropTypes = {
  data: PropTypes.object.isRequired,
};

export default Product;

export const pageQuery = graphql`
  query productQuery($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      id
      title
      slug
      createdAt(formatString: "MMMM DD, YYYY")
      price
      image {
        resize(quality: 80, width: 600, height: 600, resizingBehavior: FILL) {
          src
        }
      }
      description {
        childMarkdownRemark {
          html
          excerpt
        }
      }
      relatedProducts {
        id
        slug
        title
        image {
          resize(quality: 70, width: 400, height: 225, resizingBehavior: FILL) {
            src
          }
        }
      }
    }
  }
`;
