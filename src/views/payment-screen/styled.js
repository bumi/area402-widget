import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  font-size: 16px;
  padding: 4px 4px 10px 4px;
`;

export const Subtitle = styled.h4`
  font-size: 20px;
  padding-top: 20px;
`;

export const AmountPlaceholder = styled.span`
  color: #4761fb;
`;

export const QRCode = styled.div`
  width: 90px;
  height: 90px;
  margin-bottom: 6px;
`;

export const ClipboardWrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid #e2e2e2;
`;
