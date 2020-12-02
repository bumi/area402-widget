import { h } from "preact";
import { CacheProvider } from "@emotion/react";
import { useState, useEffect } from "preact/hooks";

import Modal from "../../components/modal";
import Button from "../../components/button";

import InvoiceService from "../../services/invoice";

import DonateScreen from "../../views/donate-screen";
import WelcomeScreen from "../../views/welcome-screen";
import PaymentScreen from "../../views/payment-screen";
import ThankyouScreen from "../../views/thankyou-screen";

import { StyledCache } from "../../helpers/styled-cache";
import { WidgetWrapper } from "../../helpers/widget-wrapper";

const API_TOKEN = "UrLnHR1DKN3eiAXefkT9Lm2R";
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
  enableEmailSubscription,
}) => {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [isModalOpen, setModalIsOpen] = useState(showModal);
  const [invoiceDetails, setInvoiceDetails] = useState(null);
  const [currentScreen, setCurrentScreen] = useState(screenName);

  useEffect(() => {
    return () => setDefaults();
  }, []);

  const setDefaults = () => {
    setSelectedAmount(0);
    setModalIsOpen(false);
    setInvoiceDetails(null);
    setCurrentScreen("welcome-screen");
  };

  const closeModal = () => setDefaults();

  const openModal = () => setModalIsOpen(true);

  const handleDonateClick = () => setCurrentScreen("donate-screen");

  const paymentPagetRenderer = (invoice) => {
    setInvoiceDetails(invoice);
    setCurrentScreen("payment-screen");
  };

  const handleDonateNextClick = (amount_in_cents) => {
    setSelectedAmount(amount_in_cents);

    const invoiceOptions = {
      amount: amount_in_cents,
      apiToken: API_TOKEN,
      baseURL: apiBaseUrl,
      paymentRequestRenderer: paymentPagetRenderer,
    };
    const invoiceService = new InvoiceService(invoiceOptions);

    invoiceService.requestPayment().then((response) => {
      if (response.settled) {
        setSelectedAmount(0);
        setInvoiceDetails(null);
        setCurrentScreen("thankyou-screen");
      }
    });
  };

  const handleSubscribeClick = (value = "") => {
    console.log("entered email: ", value);
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
      case "payment-screen":
        return (
          <PaymentScreen
            title={widgetTitle}
            currency={currency}
            onRequestClose={closeModal}
            selectedAmount={selectedAmount}
            {...invoiceDetails}
          />
        );
      case "thankyou-screen":
        return (
          <ThankyouScreen
            title={widgetTitle}
            onRequestClose={closeModal}
            onSubscribeClick={handleSubscribeClick}
            enableEmailSubscription={enableEmailSubscription}
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
  currency: "€",
  widgetTitle: "",
  showModal: false,
  paymentOptions: [],
  screenName: "welcome-screen",
  enableEmailSubscription: false,
  apiBaseUrl: DEFAULT_API_BASE_URL,
};

export default Widget;
