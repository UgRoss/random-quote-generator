import * as React from 'react';
import styled from 'styled-components';

const BlockQuote = styled.blockquote`
  border-left: 8px solid ${({ theme }) => theme.colors.primaryColor};
  padding-left: 2rem;

  @media ${({ theme }) => theme.sizes.tablet} {
    padding-left: 5rem;
  }

  margin: 50px 0;
`;

export const Quote = ({ content }) => {
  return (
    <BlockQuote className="Quote">
      <h1>{content}</h1>
    </BlockQuote>
  );
};
