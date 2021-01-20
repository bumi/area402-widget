import styled from "@emotion/styled";

const topCircleSvg = (color) =>
  btoa(`
<svg width="160" height="114" fill="${color}" opacity="0.07" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="M-218,-100a178,178 0 1,0 356,0a178,178 0 1,0 -356,0" />
  </g>
</svg>
`);
const bottomCircleSvg = (color) =>
  btoa(`
<svg width="160" height="114" fill="${color}" opacity="0.07" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="M0,178a178,178 0 1,0 356,0a178,178 0 1,0 -356,0" />
  </g>
</svg>
`);

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
  font-size: 1em;
  background-image: url("data:image/svg+xml;base64,${topCircleSvg("black")}"),
    url("data:image/svg+xml;base64,${bottomCircleSvg("black")}");
  background-repeat: no-repeat, no-repeat;
  background-position: top left, bottom right;
`;
