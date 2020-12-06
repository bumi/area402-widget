import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 10px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  width: 100%;
  font-size: 16px;
  padding: 4px 4px 10px 4px;
`;

export const Subtitle = styled.h4`
  font-size: 20px;
  padding-top: 20px;
`;

export const ThankyouNote = styled.h5`
  font-size: 18px;
  padding-top: 8px;
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
