import styled from "@emotion/styled";

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const TagItem = styled.span(
  (props) => `
    margin: 0 0.1em;
    padding: 0.3em 0.6em;
    cursor: pointer;
    border-radius: 50px;
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    transition: all 400ms ease-in-out;
    font-size: 1.1em;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0em;
    text-align: center;

    &:hover {
      border-color: black;
      border-color: var(--primary-color);
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
        border-color: black;
        border-color: var(--primary-color);
      `
    }
  `
);

export const CustomInput = styled.input`
  width: 4em;
  margin: 0 0.1em;
  padding: 0.3em 0.6em;
  border-radius: 50px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  transition: all 200ms ease-in-out;
  font-size: 1.1em;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: center;

  &:focus,
  &:hover {
    outline: none;
    border-color: black;
    border-color: var(--primary-color);
  }
`;
