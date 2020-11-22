import { h } from "preact";
import { useState } from "preact/hooks";
import { CacheProvider } from "@emotion/react";

import { StyledCache } from "../../helpers/styled-cache";
import { WidgetWrapper } from "../../helpers/widget-wrapper";

import Modal from "../../components/modal";
import Button from "../../components/button";

import DonateScreen from "../../views/donate-screen";
import WelcomeScreen from "../../views/welcome-screen";

const Widget = ({ showModal, screenName, imageSrc, widgetTitle }) => {
  const [isModalOpen, setModalIsOpen] = useState(showModal);
  const [currentScreen, setCurrentScreen] = useState(screenName);

  const toggleModalVisibility = () => {
    setModalIsOpen(!isModalOpen);
  };

  const handleDonateClick = () => {
    setCurrentScreen("donate-screen");
  };

  const handleDonateNextClick = (value) => {
    console.log("value selected: ", value);
  };

  const renderModalContent = () => {
    switch (currentScreen) {
      case "welcome-screen":
        return (
          <WelcomeScreen
            imageSrc={imageSrc}
            title={widgetTitle}
            onDonateClick={handleDonateClick}
            onRequestClose={toggleModalVisibility}
          />
        );
      case "donate-screen":
        return (
          <DonateScreen
            title={widgetTitle}
            onNextClick={handleDonateNextClick}
            onRequestClose={toggleModalVisibility}
          />
        );
      default:
        null;
    }
  };

  return (
    <WidgetWrapper>
      <CacheProvider value={StyledCache("fourohtwo", ".fourohtwo-widget")}>
        <Button buttonClick={toggleModalVisibility} />
        {isModalOpen && (
          <Modal
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
  imageSrc: "",
  widgetTitle: "",
  showModal: false,
  screenName: "welcome-screen",
};

export default Widget;
