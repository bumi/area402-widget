import { h } from "preact";
import { useState } from "preact/hooks";
import { CacheProvider } from "@emotion/react";

import { WidgetWrapper } from "../../helpers/widget-wrapper";
import { StyledCache } from "../../helpers/styled-cache";

import Modal from "../../components/modal";
import Button from "../../components/button";

const Widget = ({ showModal }) => {
  const [isModalOpen, setModalIsOpen] = useState(showModal);

  const toggleModalVisibility = () => {
    setModalIsOpen(!isModalOpen);
  };

  return (
    <WidgetWrapper>
      <CacheProvider value={StyledCache("fourohtwo", ".fourohtwo-widget")}>
        <Button buttonClick={toggleModalVisibility} />
        {isModalOpen && <Modal onRequestClose={toggleModalVisibility} />}
      </CacheProvider>
    </WidgetWrapper>
  );
};

Widget.defaultProps = {
  showModal: false,
};

export default Widget;
