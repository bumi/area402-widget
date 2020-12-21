import { h, Component } from "preact";
import { CacheProvider } from "@emotion/react";

import Modal from "../../components/modal";
import Button from "../../components/button";

import InvoiceService from "../../services/invoice";

import DonateScreen from "../../views/donate-screen";
import WelcomeScreen from "../../views/welcome-screen";
import PaymentScreen from "../../views/payment-screen";
import ThankyouScreen from "../../views/thankyou-screen";
import LoadingScreen from "../../views/loading-screen";

import { StyledCache } from "../../utils/styled-cache";
import { WidgetWrapper } from "../../utils/widget-wrapper";
import {
  DEFAULT_API_BASE_URL,
  DEFAULT_BASE_CLASSNAME,
} from "../../utils/constants";

// Merge various configuration objects. The last has the highest priority.
// usage: getInitialState(this.props, {title: "Hallo"});
function getInitialState() {
  return Object.assign(Widget.defaultProps, ...arguments);
}

class Widget extends Component {
  constructor(props) {
    super(props);

    this.setDefaults();
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
    return fetch(`${this.props.apiBaseUrl}/v1/configuration`, {
      headers: { "Api-Token": this.props.apiToken },
    }).then((response) => {
      if (response.ok) {
        response.json().then((config) => {
          this.widgetConfig = config;
          this.setDefaults();
        });
      } else {
        this.setDefaults();
      }
    });
  }

  setDefaults = () => {
    const initialState = getInitialState(this.props, this.widgetConfig);
    this.setState({
      ...initialState,
      isModalOpen: false,
      invoiceDetails: null,
      fetchingInvoiceState: false,
      currentScreen: initialState.welcomeMessage
        ? "welcome-screen"
        : "donate-screen",
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

  requestPayment = (args) => {
    const amountInCents = parseInt(args.amount, 10);

    if (!amountInCents) {
      console.log("Invalid amount");
    } else {
      this.setState(
        {
          isModalOpen: true,
          currentScreen: "loading-screen",
        },
        () => {
          this.requestPaymentHandler(amountInCents);
        },
      );
    }
  };

  openWidget = (attributes) => {
    this.setState({
      ...attributes,
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

  requestPaymentHandler = (amountInCents) => {
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
      title,
      currentScreen,
      invoiceDetails,
      welcomeMessage,
      paymentOptions,
      disableCustomAmount,
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
            paymentOptions={paymentOptions}
            isLoading={fetchingInvoiceState}
            onNextClick={this.requestPaymentHandler}
            disableCustomAmount={disableCustomAmount}
          />
        );
      case "payment-screen":
        return <PaymentScreen {...invoiceDetails} />;
      case "thankyou-screen":
        return (
          <ThankyouScreen
            title={title}
            onSubscribeClick={this.handleSubscribeClick}
            enableEmailSubscription={enableEmailSubscription}
          />
        );
      case "loading-screen":
        return <LoadingScreen height={40} width={40} color="#4761FB" />;
      default:
        null;
    }
  };

  render({}, { title, logo, isModalOpen }) {
    return (
      <WidgetWrapper>
        <CacheProvider
          value={StyledCache("fourohtwo", `.${DEFAULT_BASE_CLASSNAME}`)}
        >
          <Button
            buttonClick={this.openModal}
            btnText={this.state.actionLabel}
          />

          {isModalOpen && (
            <Modal title={title} logo={logo} onRequestClose={this.closeModal}>
              {this.renderModalContent()}
            </Modal>
          )}
        </CacheProvider>
      </WidgetWrapper>
    );
  }
}

Widget.defaultProps = {
  actionLabel: "Donate",
  imageSrc: "",
  currency: "EUR",
  title: "",
  logo: "",
  showModal: false,
  disableCustomAmount: false,
  paymentOptions: { "1€": 1, "2€": 2, "5€": 5, "10€": 10 },
  screenName: "loading-screen",
  enableEmailSubscription: false,
  apiBaseUrl: DEFAULT_API_BASE_URL,
  apiToken: "",
  welcomeMessage: "",
};

export default Widget;
