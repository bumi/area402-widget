import { h } from "preact";
import { CacheProvider } from "@emotion/react";
import { useState, useEffect } from "preact/hooks";

import Modal from "../../components/modal";
import Button from "../../components/button";

import InvoiceService from "../../services/invoice";

import DonateScreen from "../../views/donate-screen";
import WelcomeScreen from "../../views/welcome-screen";
import PaymentScreen from "../../views/payment-screen";

import { StyledCache } from "../../helpers/styled-cache";
import { WidgetWrapper } from "../../helpers/widget-wrapper";

const API_TOKEN = "ux9EDBaWq7E7GFrUe1EiKBrk";
const DEFAULT_API_BASE_URL = "https://area402.herokuapp.com";

const MOCK_RESPONSE = {
  identifier: "gdef6FAzuzeyZdgMCEKBLWAn",
  value: 1,
  memo: "",
  payment_request: null,
  r_hash_str: null,
  amt_paid_sat: null,
  settled: null,
  state: null,
  creation_date: null,
  expiry: null,
  qr_code_png:
    "https://area402.herokuapp.com/v1/invoice/gdef6FAzuzeyZdgMCEKBLWAn.png",
  qr_code_svg:
    "https://area402.herokuapp.com/v1/invoice/gdef6FAzuzeyZdgMCEKBLWAn.svg",
};

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
  const [invoiceDetails, setInvoiceDetails] = useState(null);
  const [currentScreen, setCurrentScreen] = useState(screenName);

  useEffect(() => {
    console.log("selected amount", selectedAmount);
  }, [selectedAmount]);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  const handleDonateClick = () => setCurrentScreen("donate-screen");

  const paymentPagetRenderer = (invoice) => {
    console.log(JSON.stringify(invoice));
    setInvoiceDetails(invoice);
    setCurrentScreen("payment-screen");
  };

  const handleDonateNextClick = (value) => {
    setSelectedAmount(value);

    paymentPagetRenderer(MOCK_RESPONSE);

    // const invoiceOptions = {
    //   value,
    //   apiToken: API_TOKEN,
    //   baseURL: apiBaseUrl,
    //   paymentRequestRenderer: paymentPagetRenderer,
    // };
    // const invoiceService = new InvoiceService(invoiceOptions);

    // invoiceService.requestPayment();
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
            {...MOCK_RESPONSE}
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
  apiBaseUrl: DEFAULT_API_BASE_URL,
};

export default Widget;
