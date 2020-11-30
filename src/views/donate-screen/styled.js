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

export const Subtitle = styled.h4`
  font-size: 20px;
  padding-top: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  font-size: 16px;
  padding-top: 16px;
`;

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const TagItem = styled.span(
  (props) => `
    margin: 0 5px;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 50px;
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    transition: all 400ms ease-in-out;

    &:hover {
      border-color: #b692ff;
      background-color: #f6f2ff;
    }

    &:first-of-type {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    ${
      props.selected &&
      `
        border-color: #b692ff;
        background-color: #f6f2ff;
      `
    }
  `,
);

export const CustomInput = styled.input`
  width: 200px;
  padding: 8px 16px;
  border-radius: 50px;
  border: 1px solid #d9d9d9;
  transition: all 200ms ease-in-out;

  &:focus,
  &:hover {
    outline: none;
    border-color: #b692ff;
  }
`;
