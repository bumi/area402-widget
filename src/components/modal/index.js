import { h } from "preact";
import { useEffect } from "preact/hooks";

import {
  Title,
  Backdrop,
  StyledImage,
  TitleWrapper,
  ModalContainer,
} from "./styled";

const Modal = ({ onRequestClose, imageSrc, title, isModalOpen, children }) => {
  const onKeyDown = (event) => {
    if (event.keyCode === 27 && isModalOpen) {
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
    <Backdrop onClick={onRequestClose}>
      <ModalContainer>
        <TitleWrapper>
          {imageSrc && <StyledImage src={imageSrc} />}
          <Title>{title || "402"}</Title>
        </TitleWrapper>
        {children}
      </ModalContainer>
    </Backdrop>
  );
};

Modal.defaultProps = {
  title: "",
  imageSrc: "",
  isModalOpen: false,
  onRequestClose: () => {},
};

export default Modal;
