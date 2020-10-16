import * as React from 'react';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  margin-top: 1rem;
  padding: 1rem;
  color: ${(props) => props.theme.mutedTextColor};
  font-family: ${(props) => props.theme.secondaryFontFamily};
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
