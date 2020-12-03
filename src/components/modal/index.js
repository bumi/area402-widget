import { h } from "preact";
import { useEffect } from "preact/hooks";

import Title from "../title";
import { Backdrop, ModalWrapper, ModalContainer } from "./styled";

const Modal = ({ onRequestClose, children, title }) => {
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
        <ModalContainer>
          <Title title={title} onRequestClose={onRequestClose} />

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
