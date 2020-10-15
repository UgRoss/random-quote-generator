import styled, { keyframes } from 'styled-components';

const ringAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface LoaderProps {
  readonly color?: string;
}

export const Loader = styled.div<LoaderProps>`
  display: block;
  width: 80px;
  height: 80px;
  margin: 20px auto;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${(props) => props.color};
    border-left-color: transparent;
    border-right-color: transparent;
    animation: ${ringAnimation} 1.2s linear infinite;
  }
`;

Loader.defaultProps = {
  color: '#f7df94',
};
