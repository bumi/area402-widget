import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 30px 25px 30px;
  font-size: 14px;
  font-size: var(--font-size);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  font-style: normal;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: left;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  margin: 1em;
`;

export const Subtitle = styled.h4`
  font-family: "Open Sans", "Lucida Sans", Helvetica, Arial, sans-serif;
  font-size: 1.1em;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: center;
  padding: 0;
  margin: 0;
`;
