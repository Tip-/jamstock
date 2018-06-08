import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Wrapper = styled.footer`
  padding-bottom: 4em;
  padding-top: 1em;
  border-top: 1px solid rgb(222, 228, 237);
  color: rgb(130, 136, 148);
`;

const Credits = styled.p`
  font-size: 0.841em;
  margin-top: 1em;
  text-align: center;
`;

const ExternalLink = styled.a`
  text-decoration: underline;
`;

const Footer = () => (
  <Wrapper>
    <Credits>Demo website, not actually selling jam.</Credits>
    <Credits>
      Photos of jams and spreads by Annie Spratt, Calum Lewis, Caroline Atwood,
      Chris Liverani, Keji Gao and Natalie Rhea Riggs on{' '}
      <ExternalLink href="https://unsplash.com">Unsplash</ExternalLink>
    </Credits>
  </Wrapper>
);

export default Footer;
