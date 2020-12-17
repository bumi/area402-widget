import styled from "@emotion/styled";
import { keyframes } from "@emotion/css";

const dualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  display: inline-block;
  width: ${(p) => `${p.width}px`};
  height: ${(p) => `${p.height}px`};

  &::after {
    content: " ";
    display: block;
    margin: 0 auto;
    border-radius: 50%;
    border: 1px solid ${(p) => p.color};
    width: ${(p) => `${p.width - 2}px`};
    height: ${(p) => `${p.height - 2}px`};
    border-color: ${(p) => p.color} transparent ${(p) => p.color} transparent;
    animation: ${dualRing} 1.2s linear infinite;
  }
`;
