import * as React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import RefreshIcon from '../assets/refresh-icon.svg';

interface LinkProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const StyledRandomLink = styled.a<LinkProps>`
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.4s;

  &:hover {
    color: ${(props) => props.theme.primaryColor};
    svg {
      fill: ${(props) => props.theme.primaryColor};
    }
  }

  svg {
    transition: all 0.4s;
    fill: ${(props) => props.theme.textColor};
    margin: 0 5px;
  }
`;

export const RandomLink: React.FC<LinkProps & React.HTMLAttributes<HTMLAnchorElement>> = ({
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
