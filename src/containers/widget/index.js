import { h, Component } from "preact";
import { CacheProvider } from "@emotion/react";

import Modal from "../../components/modal";
import Button from "../../components/button";

import InvoiceService from "../../services/invoice";

import DonateScreen from "../../views/donate-screen";
import WelcomeScreen from "../../views/welcome-screen";
import PaymentScreen from "../../views/payment-screen";
import ThankyouScreen from "../../views/thankyou-screen";

import { StyledCache } from "../../utils/styled-cache";
import { WidgetWrapper } from "../../utils/widget-wrapper";

const DEFAULT_API_BASE_URL = "https://area402.herokuapp.com";

function getInitialState(props) {
  return Object.assign(Widget.defaultProps, props);
}

class Widget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // storing props in local state
      ...getInitialState(props),

      invoiceDetails: null,
      fetchingInvoiceState: false,
      currentScreen: props.welcomeMessage ? "welcome-screen" : "donate-screen",
    };

    this.invoiceService = new InvoiceService({
      apiToken: this.props.apiToken,
      apiBaseUrl: this.props.apiBaseUrl,
      paymentRequestRenderer: this.paymentRequestRenderer,
    });
  }

  componentWillUnmount() {
    this.setDefaults();
  }

  componentDidMount() {
    this.setDefaults();
  }

  setDefaults = () => {
    this.setState({
      ...getInitialState(this.props),
      isModalOpen: false,
      invoiceDetails: null,
      fetchingInvoiceState: false,
      currentScreen:
        !this.props.welcomeMessage || this.props.welcomeMessage === "" ? "donate-screen" : "welcome-screen",
    });
  };

  closeModal = () => {
    this.invoiceService.reset();
    this.setDefaults();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  openWidget = (attributes) => {
    this.setState({
      ...getInitialState(attributes),
      isModalOpen: true,
    });
  };

  handleDonateClick = () => {
    this.setState({
      currentScreen: "donate-screen",
    });
  };

  paymentRequestRenderer = (invoice) => {
    this.setState({
      invoiceDetails: invoice,
      fetchingInvoiceState: false,
      currentScreen: "payment-screen",
    });
  };

  handleDonateNextClick = (amountInCents) => {
    this.setState({
      fetchingInvoiceState: true,
    });

    this.invoiceService
      .requestPayment({ amount: amountInCents })
      .then((response) => {
        if (response.settled) {
          this.setState({
            invoiceDetails: null,
            currentScreen: "thankyou-screen",
          });
        }
      });
  };

  handleSubscribeClick = (value = "") => {
    console.log("entered email: ", value);
  };

  renderModalContent = () => {
    const {
      currency,
      widgetTitle,
      currentScreen,
      invoiceDetails,
      welcomeMessage,
      paymentOptions,
      fetchingInvoiceState,
      enableEmailSubscription,
    } = this.state;

    switch (currentScreen) {
      case "welcome-screen":
        return (
          <WelcomeScreen
            message={welcomeMessage}
            onDonateClick={this.handleDonateClick}
          />
        );
      case "donate-screen":
        return (
          <DonateScreen
            currency={currency}
            isLoading={fetchingInvoiceState}
            paymentOptions={paymentOptions}
            onNextClick={this.handleDonateNextClick}
          />
        );
      case "payment-screen":
        return <PaymentScreen {...invoiceDetails} />;
      case "thankyou-screen":
        return (
          <ThankyouScreen
            title={widgetTitle}
            onSubscribeClick={this.handleSubscribeClick}
            enableEmailSubscription={enableEmailSubscription}
          />
        );
      default:
        null;
    }
  };

  render({}, { widgetTitle, isModalOpen }) {
    return (
      <WidgetWrapper>
        <CacheProvider value={StyledCache("fourohtwo", ".fourohtwo-widget")}>
          <Button buttonClick={this.openModal} />

          {isModalOpen && (
            <Modal title={widgetTitle} onRequestClose={this.closeModal}>
              {this.renderModalContent()}
            </Modal>
          )}
        </CacheProvider>
      </WidgetWrapper>
    );
  }
}

Widget.defaultProps = {
  imageSrc: "",
  currency: "EUR",
  widgetTitle: "",
  showModal: false,
  disableCustomAmount: false,
  paymentOptions: { "1€": 1, "2€": 2, "5€": 5, "10€": 10 },
  screenName: "welcome-screen",
  enableEmailSubscription: false,
  apiBaseUrl: DEFAULT_API_BASE_URL,
  apiToken: "",
};

export default Widget;
