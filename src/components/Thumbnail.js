import React from 'react';
import Link from 'gatsby-link';
import { ListItem } from '../ui';
import styled from 'styled-components';

const ThumbnailImage = styled.img`
  margin-bottom: 0;
`;

const ThumbnailName = styled.h3`
  font-size: 1.2em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-weight: 500;
`;

const ThumbnailLink = styled(Link)`
  display: block;
`;

const Thumbnail = ({ image, slug, title }) => (
  <ListItem>
    <Link to={`/jams/${slug}`}>
      <ThumbnailImage src={image.resize.src} />
      <ThumbnailName>{title}</ThumbnailName>
    </Link>
  </ListItem>
);

export default Thumbnail;
