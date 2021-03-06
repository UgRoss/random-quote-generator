import * as React from "react";
import styled from "styled-components";

const AlertWrapper = styled.div`
  margin: 2rem 0.5rem;
  padding: 1rem;
  padding-left: 2rem;
  border-left: 0.2rem solid ${({ theme }) => theme.colors.error};

  h2 {
    margin-top: 0;
  }

  p:last-child {
    margin: 0;
  }
`;

export const ErrorAlert: React.FunctionComponent = () => {
  return (
    <AlertWrapper>
      <h2>Oops! Something went wrong.</h2>
      <p>Please try to reload the page.</p>
    </AlertWrapper>
  );
};
