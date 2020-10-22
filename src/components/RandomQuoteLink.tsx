import * as React from 'react';
import styled from 'styled-components';
import RefreshIcon from '../assets/refresh-icon.svg';

interface LinkProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const StyledRandomLink = styled.a`
  color: ${({ theme }) => theme.colorrs.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.4s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    svg {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  svg {
    transition: all 0.4s;
    fill: ${({ theme }) => theme.colors.text};
    margin: 0 5px;
  }
`;

export const RandomQuoteLink: React.FC<LinkProps & React.HTMLAttributes<HTMLAnchorElement>> = ({
  children,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <StyledRandomLink href="#no" onClick={handleClick} {...props}>
      <span>Random</span>
      <RefreshIcon />
    </StyledRandomLink>
  );
};
