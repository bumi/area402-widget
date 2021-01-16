import { h } from "preact";
import { CacheProvider } from "@emotion/react";

import Modal from "../../components/modal";
import Button from "../../components/button";

import WidgetBase from "../base-class";

import { StyledCache } from "../../utils/styled-cache";
import { WidgetWrapper } from "../../utils/widget-wrapper";
import { DEFAULT_BASE_CLASSNAME } from "../../utils/constants";

class Widget extends WidgetBase {
  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.invoiceService.reset();
    this.setDefaults();
  };

  openWidget = (attributes) => {
    this.setState({
      ...attributes,
      isModalOpen: true,
    });
  };

  render({}, { title, logo, actionLabel, isModalOpen, styles }) {
    return (
      <WidgetWrapper
        customStyles={styles}
        className={`${DEFAULT_BASE_CLASSNAME}-wrapper`}
      >
        <CacheProvider
          value={StyledCache("fourohtwo", `.${DEFAULT_BASE_CLASSNAME}`)}
        >
          {actionLabel && (
            <Button buttonClick={this.openModal} btnText={actionLabel} />
          )}

          {isModalOpen && (
            <Modal title={title} logo={logo} onRequestClose={this.closeModal}>
              {this.renderWidgetContent()}
            </Modal>
          )}
        </CacheProvider>
      </WidgetWrapper>
    );
  }
}

Widget.defaultProps = WidgetBase.defaultProps;

export default Widget;
