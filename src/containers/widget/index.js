import { h } from "preact";
import { useState } from "preact/hooks";
import { CacheProvider } from "@emotion/react";

import { StyledCache } from "../../helpers/styled-cache";
import { WidgetWrapper } from "../../helpers/widget-wrapper";

import Modal from "../../components/modal";
import Button from "../../components/button";

import WelcomeScreen from "../../views/welcome-screen";

const Widget = ({ showModal, screenName, imageSrc, title }) => {
  const [isModalOpen, setModalIsOpen] = useState(showModal);

  const toggleModalVisibility = () => {
    setModalIsOpen(!isModalOpen);
  };

  const renderModalContent = () => {
    switch (screenName) {
      case "welcome-screen":
      default:
        return <WelcomeScreen onRequestClose={toggleModalVisibility} />;
    }
  };

  return (
    <WidgetWrapper>
      <CacheProvider value={StyledCache("fourohtwo", ".fourohtwo-widget")}>
        <Button buttonClick={toggleModalVisibility} />
        {isModalOpen && (
          <Modal
            title={title}
            imageSrc={imageSrc}
            isModalOpen={isModalOpen}
            onRequestClose={toggleModalVisibility}
          >
            {renderModalContent()}
          </Modal>
        )}
      </CacheProvider>
    </WidgetWrapper>
  );
};

Widget.defaultProps = {
  title: "",
  imageSrc: "",
  showModal: false,
  screenName: "welcome-screen",
};

export default Widget;
