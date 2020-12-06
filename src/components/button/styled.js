import styled from "@emotion/styled";

export const StyledButton = styled.button`
  border: 0;
  color: #fff;
  width: 140px;
  height: 32px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  font-style: normal;
  letter-spacing: 0em;
  border-radius: 50px;
  transition: box-shadow 100ms ease-in-out;
  background: linear-gradient(90deg, #764dfb 0%, #4761fb 100%);

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
