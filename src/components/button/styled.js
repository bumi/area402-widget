import styled from "@emotion/styled";

export const StyledButton = styled.button`
  background: #8c54ff;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  min-width: 200px;
  width: fit-content;
  padding: 10px 15px;
  border-radius: 50px;
  transition: all 100ms ease-out;

  &:hover {
    background: #682ede;
    transform: scale(1.05);
  }
`;
