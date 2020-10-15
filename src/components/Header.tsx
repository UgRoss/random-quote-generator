import * as React from 'react';
import styled from 'styled-components';
import RefreshIcon from '../assets/refresh-icon.svg';

const HeaderWrapper = styled.header`
  padding: 1.5rem 100px;
  max-width: 1400px;
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: flex-end;

  a {
    font-weight: 500;
    color: #4f4f4f;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      color: darken(#4f4f4f, 5%);
    }

    svg {
      margin: 0 5px;
    }
  }
`;

interface HeaderProps {
  onRandomClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Header: React.FC<HeaderProps> = ({ onRandomClick }) => {
  const handleRandomButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onRandomClick(e);
  };

  return (
    <HeaderWrapper>
      <HeaderNav>
        <a href="#" onClick={handleRandomButtonClick}>
          <span>Random</span>
          <RefreshIcon />
        </a>
      </HeaderNav>
    </HeaderWrapper>
  );
};
