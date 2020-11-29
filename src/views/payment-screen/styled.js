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
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
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
  box-sizing: border-box;
`;

export const AmountPlaceholder = styled.span`
  color: #4761fb;
  box-sizing: border-box;
`;

export const ClipboardWrapper = styled.div`
  display: flex;
  margin-top: 6px;
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
  line-height: 16px;
  font-style: normal;
  margin-right: 16px;
  font-weight: normal;
  font-family: Open Sans;
  box-sizing: border-box;
`;

export const StyledButton = styled.a`
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
  transition: all 100ms ease-out;

  &:hover {
    background: #682ede;
    transform: scale(1.05);
  }
`;
