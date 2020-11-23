import { h } from "preact";
import { useState } from "preact/hooks";
import { CacheProvider } from "@emotion/react";

import Modal from "../../components/modal";
import Button from "../../components/button";

import DonateScreen from "../../views/donate-screen";
import WelcomeScreen from "../../views/welcome-screen";

import { StyledCache } from "../../helpers/styled-cache";
import { WidgetWrapper } from "../../helpers/widget-wrapper";

const Widget = ({
  imageSrc,
  showModal,
  screenName,
  widgetTitle,
  welcomeMessage,
}) => {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [isModalOpen, setModalIsOpen] = useState(showModal);
  const [currentScreen, setCurrentScreen] = useState(screenName);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  const handleDonateNextClick = (value) => setSelectedAmount(value);

  const handleDonateClick = () => setCurrentScreen("donate-screen");

  const renderModalContent = () => {
    switch (currentScreen) {
      case "welcome-screen":
        return (
          <WelcomeScreen
            imageSrc={imageSrc}
            title={widgetTitle}
            message={welcomeMessage}
            onRequestClose={closeModal}
            onDonateClick={handleDonateClick}
          />
        );
      case "donate-screen":
        return (
          <DonateScreen
            title={widgetTitle}
            onRequestClose={closeModal}
            onNextClick={handleDonateNextClick}
          />
        );
      default:
        null;
    }
  };

  return (
    <WidgetWrapper>
      <CacheProvider value={StyledCache("fourohtwo", ".fourohtwo-widget")}>
        <Button buttonClick={openModal} />

        {isModalOpen && (
          <Modal onRequestClose={closeModal}>{renderModalContent()}</Modal>
        )}
      </CacheProvider>
    </WidgetWrapper>
  );
};

Widget.defaultProps = {
  imageSrc: "",
  widgetTitle: "",
  showModal: false,
  screenName: "welcome-screen",
};

export default Widget;
