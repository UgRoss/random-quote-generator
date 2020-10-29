import * as React from 'react';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  margin-top: 1rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.mutedText};
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  text-align: center;

  small {
    margin: 0;
  }
`;

export const Footer: React.FunctionComponent = () => (
  <FooterWrapper>
    <small>Ross @ DevChallenges.io</small>
  </FooterWrapper>
);
