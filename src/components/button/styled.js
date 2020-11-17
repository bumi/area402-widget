import styled from "@emotion/styled";

export const StyledButton = styled.button`
  background: #8c54ff;
  border: 0;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  width: fit-content;
  padding: 10px 15px;
  margin-bottom: 30px;
  transition: all 100ms ease-out;

  &:hover {
    background: #682ede;
    transform: scale(1.05);
  }
`;
