import { h } from "preact";
import { useState } from "preact/hooks";
// import { WidgetWrapper, Title } from "./styled";

import Modal from "../../components/modal";
import Button from "../../components/button";

const Widget = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);

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

export default Widget;
