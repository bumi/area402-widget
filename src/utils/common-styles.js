import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 40px 40px;
  flex-direction: column;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  flex: 1;
  width: 100%;
  font-size: 16px;
`;

export const Subtitle = styled.h4`
  font-size: 20px;
  box-sizing: border-box;
`;
