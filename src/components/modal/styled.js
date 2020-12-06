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
  box-sizing: border-box;
`;

export const ModalWrapper = styled.div`
  width: 40%;
  height: 400px;
  display: flex;
  z-index: 99;
  background: #fff;
  border-radius: 6px;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
`;
