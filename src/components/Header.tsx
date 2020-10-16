import * as React from 'react';
import styled from 'styled-components';
import { RandomLink } from './RandomLink';

const HeaderWrapper = styled.header`
  padding: 1.5rem 100px;
  max-width: 1400px;
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

interface HeaderProps {
  onRandomClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Header: React.FC<HeaderProps> = ({ onRandomClick }) => (
  <HeaderWrapper>
    <HeaderNav>
      <RandomLink onClick={onRandomClick} />
    </HeaderNav>
  </HeaderWrapper>
);
