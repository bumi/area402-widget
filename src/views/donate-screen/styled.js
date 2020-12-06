import styled from "@emotion/styled";

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
