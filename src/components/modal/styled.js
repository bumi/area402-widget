import styled from "@emotion/styled";

export const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.65);
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  max-width: 500px;
  display: flex;
  z-index: 99;
  background: #fff;
  border-radius: 6px;
  position: relative;
  align-items: center;
  flex-direction: column;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Open Sans", "Lucida Sans", Helvetica, Arial, sans-serif;
  font-size: 1rem;
`;

