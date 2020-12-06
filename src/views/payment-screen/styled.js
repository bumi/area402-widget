import styled from "@emotion/styled";

import { Container as StyledContainer } from "../../utils/common-styles";

export {
  Content,
  Subtitle,
  ContentWrapper,
  Container as StyledContainer,
} from "../../utils/common-styles";

export const Container = styled(StyledContainer)`
  padding: 0;
`;

export const AmountPlaceholder = styled.span`
  color: #4761fb;
  box-sizing: border-box;
`;

export const ClipboardWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 6px 16px;
  background: #ffffff;
  border-radius: 30px;
  box-sizing: border-box;
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
  font-family: Open Sans;
  box-sizing: border-box;
  text-overflow: ellipsis;
`;

export const Button = styled.a`
  background: #8c54ff;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  min-width: 200px;
  text-align: center;
  width: fit-content;
  padding: 10px 15px;
  border-radius: 50px;
  text-decoration: none;
  font-family: Open Sans;
  transition: all 100ms ease-out;

  &:hover {
    background: #682ede;
    transform: scale(1.05);
  }
`;

export const CountdownText = styled.div`
  font-family: Open Sans;
  color: #3e396b;
  margin: 14px 0;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  font-style: normal;
  text-align: center;
  letter-spacing: 0em;
`;
