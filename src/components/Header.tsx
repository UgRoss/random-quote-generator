import * as React from "react";
import styled from "styled-components";
import { RandomQuoteLink } from "./RandomQuoteLink";

const HeaderWrapper = styled.header`
  padding: 1.5rem;

  @media ${({ theme }) => theme.sizes.tablet} {
    padding: 1.5rem 5rem;
  }

  nav {
    display: flex;
    justify-content: flex-end;
  }
`;

interface HeaderProps {
  onRandomClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Header: React.FunctionComponent<HeaderProps> = ({
  onRandomClick,
}) => (
  <HeaderWrapper>
    <nav>
      <RandomQuoteLink onClick={onRandomClick} />
    </nav>
  </HeaderWrapper>
);
