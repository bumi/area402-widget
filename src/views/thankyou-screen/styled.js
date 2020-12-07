import styled from "@emotion/styled";

export {
  Content,
  Subtitle,
  Container,
  ContentWrapper,
} from "../../utils/common-styles";

export const ThankyouNote = styled.h5`
  font-size: 14px;
  margin-top: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
`;

export const EmailWrapper = styled.div`
  display: flex;
  margin-top: 6px;
`;

export const StyledSpan = styled.span`
  display: flex;
  font-size: 14px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

export const EmailInput = styled.input`
  border: none;
  width: 300px;
  color: #3e396b;
  font-size: 12px;
  outline: none;
  line-height: 16px;
  font-style: normal;
  margin-right: 16px;
  font-weight: normal;
  padding: 6px 16px;
  background: #ffffff;
  border-radius: 30px;
  border: 1px solid #e2e2e2;
`;
