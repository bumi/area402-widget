import { h } from "preact";
import { useEffect } from "preact/hooks";

import Title from "../title";
import {
  Backdrop,
  TopCircle,
  BottomCircle,
  ModalWrapper,
  ModalContainer,
} from "./styled";

const Modal = ({ onRequestClose, children, title, logo }) => {
  const onKeyDown = (event) => {
    if (event.keyCode === 27) {
      // Close the modal when the Escape key is pressed
      onRequestClose();
    }
  };

  // Use useEffect to add an event listener to the document
  useEffect(() => {
    // Prevent scolling
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <Backdrop>
      <ModalWrapper>
        <TopCircle />
        <BottomCircle />

        <ModalContainer>
          <Title title={title} logo={logo} onRequestClose={onRequestClose} />

          {children}
        </ModalContainer>
      </ModalWrapper>
    </Backdrop>
  );
};

Modal.defaultProps = {
  onRequestClose: () => {},
};

export default Modal;
