import styled from "@emotion/styled";

export const StyledButton = styled.button`
  border: 0;
  color: #fff;
  padding: 0.5em 2em;
  margin: 3px;
  outline: none;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  font-style: normal;
  letter-spacing: 0em;
  border-radius: 50px;
  transition: box-shadow 100ms ease-in-out;
  pointer-events: ${(p) => (p.loading ? "none" : "auto")};
  cursor: ${(p) => (p.loading ? "not-allowed" : "pointer")};
  background: linear-gradient(90deg, var(--primary-color) 0%, var(--primary-color) 100%);

  position: relative;
  display: inline-block;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    -webkit-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  &:hover::after {
    opacity: 1;
  }
`;
