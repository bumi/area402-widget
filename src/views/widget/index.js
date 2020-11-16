import { h } from "preact";
import { useState } from "preact/hooks";
// import { WidgetWrapper, Title } from "./styled";

import Modal from "../../components/modal";
import Button from "../../components/button";

const Widget = ({ showModal }) => {
  const [isModalOpen, setModalIsOpen] = useState(showModal);

  const toggleModalVisibility = () => {
    setModalIsOpen(!isModalOpen);
  };

  return (
    <div>
      <Button buttonClick={toggleModalVisibility} />
      {isModalOpen && <Modal onRequestClose={toggleModalVisibility} />}
    </div>
  );
};

Widget.defaultProps = {
  showModal: false,
};

export default Widget;
