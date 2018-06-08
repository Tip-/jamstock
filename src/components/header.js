import React, { Component } from 'react';
import RawLink from 'gatsby-link';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from 'react-instantsearch/dom';
import styled from 'styled-components';
import { InlineList } from '../ui';
import logo from '../logo.svg';

const Link = styled(RawLink)`
  display: block;
`;

const Attribution = styled.div`
  margin: 0.5em 0;
  text-align: right;

  > img {
    display: inline-block;
    width: 7em;
  }
`;

const Wrapper = styled.header`
  padding-top: 1em;
  padding-bottom: 1em;
`;

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 8em;

  @media screen and (min-width: 350px) {
    width: 10em;
  }
`;

const TopBar = styled.nav`
  display: flex;
  margin-bottom: 1em;
  align-items: center;
  justify-content: space-between;
`;

const NavList = InlineList.extend`
  font-weight: 500;
`;

const SearchContainer = styled.div`
  margin-left: auto;
`;

const Product = ({ hit }) => (
  <a href={`/jams/${hit.fields.slug.en}`}>
    <Highlight {...{ hit }} attribute="fields.title.en" tagName="mark">
      {hit.fields.title.en}
    </Highlight>
  </a>
);

class Header extends Component {
  state = {
    showHits: false,
  };

  render() {
    const { siteTitle, data } = this.props;

    return (
      <Wrapper>
        <TopBar>
          <Link to="/">
            <Img src={logo} />
          </Link>

          <NavList>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </NavList>
        </TopBar>

        <SearchContainer>
          <InstantSearch
            appId=""
            apiKey=""
            indexName="Jamstock"
            onSearchStateChange={({ query }) =>
              this.setState({ showHits: Boolean(query) })
            }
          >
            <SearchBox />
            <Attribution>
              <img src="https://www.algolia.com/static_assets/images/press/downloads/search-by-algolia.png" />
            </Attribution>
            {this.state.showHits && <Hits hitComponent={Product} />}
          </InstantSearch>
        </SearchContainer>
      </Wrapper>
    );
  }
}

export default Header;
