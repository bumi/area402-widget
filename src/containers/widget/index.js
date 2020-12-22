import { h } from "preact";
import { CacheProvider } from "@emotion/react";

import Modal from "../../components/modal";
import Button from "../../components/button";

import Base from "../base";

import { DEFAULT_BASE_CLASSNAME } from "../../utils/constants";
import { StyledCache } from "../../utils/styled-cache";
import { WidgetWrapper } from "../../utils/widget-wrapper";

class Widget extends Base {

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

  render({}, { title, logo, isModalOpen }) {
    return (
      <WidgetWrapper className={`${DEFAULT_BASE_CLASSNAME}-wrapper`}>
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

Widget.defaultProps = Object.assign(Base.defaultProps, {
  isModalOpen: false,
});

export default Widget;
