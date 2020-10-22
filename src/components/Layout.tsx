import * as React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  min-height: 100vh;
  margin: 0 auto;

  main {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    width: 100%;
    padding: 2rem;
    margin: 0 auto;
  }
`;

interface LayoutProps {
  readonly onRandomClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onRandomClick }) => {
  return (
    <LayoutWrapper>
      {onRandomClick && <Header onRandomClick={onRandomClick} />}
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  );
};
