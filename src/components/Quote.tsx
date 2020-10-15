import * as React from 'react';
import styled from 'styled-components';

const BlockQuote = styled.blockquote`
  border-left: 8px solid #f7df94;
  padding-left: 100px;
  margin: 50px 0;
`;

export const Quote = ({ content }) => {
  return (
    <BlockQuote className="Quote">
      <h1>{content}</h1>
    </BlockQuote>
  );
};
