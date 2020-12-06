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
  width: 14px;
  height: 14px;

  &::after {
    content: " ";
    display: block;
    width: 8px;
    height: 8px;
    margin: 0 auto;
    border-radius: 50%;
    border: 4px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${dualRing} 1.2s linear infinite;
  }
`;
