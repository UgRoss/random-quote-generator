import * as React from 'react';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  margin-top: 1rem;
  color: #a9a9a9;
  padding: 1rem;
  font-family: 'Montserrat', sans-serif;
  text-align: center;

  small {
    margin: 0;
  }
`;

export const Footer = () => (
  <FooterWrapper>
    <small>Ross @ DevChallenges.io</small>
  </FooterWrapper>
);
