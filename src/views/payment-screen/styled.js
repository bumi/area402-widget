import styled from "@emotion/styled";

import { Container as StyledContainer } from "../../utils/common-styles";

export { Content, Subtitle, ContentWrapper } from "../../utils/common-styles";

export const Container = styled(StyledContainer)`
  padding: 0;
`;

export const AmountPlaceholder = styled.span`
  color: #4761fb;
`;

export const ClipboardWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 6px 16px;
  background: #ffffff;
  border-radius: 30px;
  border: 1px solid #e2e2e2;
`;

export const ClipboardText = styled.input`
  border: none;
  width: 175px;
  outline: none;
  color: #3e396b;
  font-size: 12px;
  overflow: hidden;
  line-height: 16px;
  font-style: normal;
  margin-right: 16px;
  font-weight: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Button = styled.a`
  border: 0;
  color: #fff;
  width: 140px;
  height: 32px;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  font-style: normal;
  letter-spacing: 0em;
  border-radius: 50px;
  text-decoration: none;
  transition: box-shadow 100ms ease-in-out;
  background: linear-gradient(90deg, #764dfb 0%, #4761fb 100%);

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
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
  margin: 14px 0;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  font-style: normal;
  text-align: center;
  letter-spacing: 0em;
`;
