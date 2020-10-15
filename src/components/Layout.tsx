import * as React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    padding: 2rem;
    margin: 0 auto;
  }
`;

interface LayoutProps {
  readonly onRandomClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  readonly showHeader?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, onRandomClick, showHeader = true }) => {
  return (
    <LayoutWrapper>
      {showHeader && <Header onRandomClick={onRandomClick} />}
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  );
};
