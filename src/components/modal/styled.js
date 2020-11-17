import styled from "@emotion/styled";

export const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.65);
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 40%;
  padding: 15px;
  height: 500px;
  display: flex;
  max-width: 100%;
  background: #fff;
  margin: 50px auto;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.img`
  height: 50px;
  width: 100px;
`;

export const Title = styled.h3`
  font-size: 15px;
`;
