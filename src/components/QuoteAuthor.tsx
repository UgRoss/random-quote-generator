import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArrowRight from '../assets/arrow-right-icon.svg';

const QuoteAuthorWrapper = styled(Link)`
  padding: 50px 30px;
  text-decoration: none;
  transition: all 0.4s;
  position: relative;
  margin-top: 50px;

  &:hover {
    background-color: #333333;

    p {
      color: #fff;
    }

    svg {
      opacity: 1;
    }
  }

  p {
    font-size: 24px;
    transition: all 0.4s;
    color: #4f4f4f;
    font-weight: 800;
    margin: 0 0 8px;
  }

  small {
    color: #828282;
  }

  svg {
    opacity: 0;
    transition: all 0.3s;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    fill: #fff;
    width: 25px;
    height: 25px;
    right: 25px;
  }
`;

interface QuoteAuthorProps {
  author: string;
  category: string;
}

export const QuoteAuthor: React.FC<QuoteAuthorProps> = ({ author, category }) => {
  return (
    <QuoteAuthorWrapper to={`/author/${author}`}>
      <p>{author}</p>
      <small>{category}</small>

      <ArrowRight />
    </QuoteAuthorWrapper>
  );
};
