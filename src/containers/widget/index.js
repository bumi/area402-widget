import { h } from "preact";
import { CacheProvider } from "@emotion/react";
import { useState, useEffect } from "preact/hooks";

import Modal from "../../components/modal";
import Button from "../../components/button";

import InvoiceService from "../../services/invoice";

import DonateScreen from "../../views/donate-screen";
import WelcomeScreen from "../../views/welcome-screen";

import { StyledCache } from "../../helpers/styled-cache";
import { WidgetWrapper } from "../../helpers/widget-wrapper";

const API_TOKEN = "L7bRwjnMTvKpLgRhzScqi5Y8";
const DEFAULT_API_BASE_URL = "https://area402.herokuapp.com";

const Widget = ({
  currency,
  imageSrc,
  showModal,
  apiBaseUrl,
  screenName,
  widgetTitle,
  welcomeMessage,
  paymentOptions,
}) => {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [isModalOpen, setModalIsOpen] = useState(showModal);
  const [currentScreen, setCurrentScreen] = useState(screenName);

  useEffect(() => {
    console.log("selected amount", selectedAmount);
  }, [selectedAmount]);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  const handleDonateClick = () => setCurrentScreen("donate-screen");

  const paymentPagetRenderer = (invoiceDetails) => {
    console.log("invoiceDetails", invoiceDetails);
    // setCurrentScreen("paymeny-screen");
  };

  const handleDonateNextClick = async (value) => {
    setSelectedAmount(value);

    const invoiceOptions = {
      value,
      apiToken: API_TOKEN,
      baseURL: apiBaseUrl,
      paymentRequestRenderer: paymentPagetRenderer,
    };
    const invoiceService = new InvoiceService(invoiceOptions);

    invoiceService.requestPayment();
  };

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
            currency={currency}
            onRequestClose={closeModal}
            currencyOptions={paymentOptions}
            onNextClick={handleDonateNextClick}
          />
        );
      default:
        null;
    }
  };

  return (
    <WidgetWrapper ref={(component) => (window.widget = component)}>
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
  currency: "€",
  widgetTitle: "",
  showModal: false,
  paymentOptions: [],
  screenName: "welcome-screen",
  apiBaseUrl: DEFAULT_API_BASE_URL,
};

export default Widget;
