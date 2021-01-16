import { h, Component } from "preact";

import InvoiceService from "../../services/invoice";

import DonateScreen from "../../views/donate-screen";
import LoadingScreen from "../../views/loading-screen";
import WelcomeScreen from "../../views/welcome-screen";
import PaymentScreen from "../../views/payment-screen";
import ThankyouScreen from "../../views/thankyou-screen";

import { DEFAULT_API_BASE_URL } from "../../utils/constants";

function getInitialState() {
  const initialState = Object.assign({}, WidgetBase.defaultProps, ...arguments);

  return {
    ...initialState,
    currentScreen: initialState.welcomeMessage
      ? "welcome-screen"
      : "donate-screen",
  };
}

class WidgetBase extends Component {
  constructor(props) {
    super(props);

    this.state = getInitialState(props);
    this.invoiceService = new InvoiceService({
      apiToken: this.props.apiToken,
      apiBaseUrl: this.props.apiBaseUrl,
      paymentRequestRenderer: this.paymentRequestRenderer,
    });
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
    this.setState(getInitialState(this.props, this.widgetConfig));
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
        }
      );
    }
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

  renderWidgetContent = () => {
    switch (this.state.currentScreen) {
      case "welcome-screen":
        return (
          <WelcomeScreen
            message={this.state.welcomeMessage}
            onDonateClick={this.handleDonateClick}
          />
        );
      case "donate-screen":
        return (
          <DonateScreen
            currency={this.state.currency}
            paymentOptions={this.state.paymentOptions}
            isLoading={this.state.fetchingInvoiceState}
            onNextClick={this.requestPaymentHandler}
            customAmount={this.state.customAmount}
          />
        );
      case "payment-screen":
        return <PaymentScreen {...this.state.invoiceDetails} />;
      case "thankyou-screen":
        return (
          <ThankyouScreen
            thankyouMessage={this.state.thankyouMessage}
            onSubscribeClick={this.handleSubscribeClick}
            enableEmailSubscription={this.state.enableEmailSubscription}
          />
        );
      case "loading-screen":
        return (
          <LoadingScreen height={40} width={40} color="var(--primary-color)" />
        );
      default:
        null;
    }
  };
}

WidgetBase.defaultProps = {
  actionLabel: "Donate",
  imageSrc: "",
  currency: "EUR",
  title: "",
  logo: "",
  customAmount: true,
  paymentOptions: { "1€": 1, "2€": 2, "5€": 5, "10€": 10 },
  screenName: "loading-screen",
  enableEmailSubscription: false,
  apiBaseUrl: DEFAULT_API_BASE_URL,
  apiToken: "",
  welcomeMessage: "",
  thankyouMessage: "Thank you!",
  isModalOpen: false,
  invoiceDetails: null,
  fetchingInvoiceState: false,
  styles: "",
};

export default WidgetBase;
