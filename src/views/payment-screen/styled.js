import styled from "@emotion/styled";

import { Container as StyledContainer } from "../../utils/common-styles";

export { Content, Subtitle, ContentWrapper } from "../../utils/common-styles";

export const Container = styled(StyledContainer)`
  padding: 0;
`;

export const AmountPlaceholder = styled.span`
  color: var(--primary-color);
`;

export const ClipboardWrapper = styled.div`
  display: flex;
  margin: 1em;
  padding: 0.3em 0.6em;
  background: #ffffff;
  border-radius: 30px;
  border: 1px solid #e2e2e2;

  svg.copy.active {
    padding: 1px;
    width: 13px;
    height: 13px;
    fill: #000;
  }
  svg.copy {
    cursor: pointer;
    padding: 0px;
    width: 15px;
    height: 15px;
    fill: var(--primary-color);
  }
`;

export const ClipboardText = styled.input`
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  color: #3e396b;
  font-size: 0.8rem;
  overflow: hidden;
  line-height: 16px;
  font-style: normal;
  margin-right: 16px;
  font-weight: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Button = styled.a`
  text-decoration: none;
  border: 0;
  color: #fff;
  padding: 0.5em 2em;
  margin: 3px;
  outline: none;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  font-style: normal;
  letter-spacing: 0em;
  border-radius: 50px;
  transition: box-shadow 100ms ease-in-out;
  pointer-events: ${(p) => (p.loading ? "none" : "auto")};
  cursor: ${(p) => (p.loading ? "not-allowed" : "pointer")};
  background: linear-gradient(90deg, var(--primary-color) 0%, var(--primary-color) 100%);

  position: relative;
  display: inline-block;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    -webkit-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const CountdownText = styled.div`
  color: #3e396b;
  margin-top: 1em;
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 1.5;
  font-style: normal;
  text-align: center;
  letter-spacing: 0em;
`;
