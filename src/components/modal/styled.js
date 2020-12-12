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

const TopCircleWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const TopCircle = () => (
  <TopCircleWrapper>
    <svg width="180" height="130" viewBox="0 0 180 130" fill="none">
      <circle cx="-40" cy="-100" r="232" fill="#4761FB" fill-opacity="0.07" />
    </svg>
  </TopCircleWrapper>
);

const BottomCirlceWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -5px;
  text-align: end;
  z-index: -1;
`;

export const BottomCircle = () => (
  <BottomCirlceWrapper>
    <svg width="160" height="114" viewBox="0 0 160 114" fill="none">
      <circle cx="178" cy="178" r="178" fill="#4761FB" fill-opacity="0.07" />
    </svg>
  </BottomCirlceWrapper>
);
