import { h, Component } from "preact";
import { CacheProvider } from "@emotion/react";

import WidgetBase from "../base-class";
import { StyledCache } from "../../utils/styled-cache";
import { WidgetWrapper } from "../../utils/widget-wrapper";
import { DEFAULT_BASE_CLASSNAME } from "../../utils/constants";

class InlineWidget extends WidgetBase {
  render({}, { styles }) {
    return (
      <WidgetWrapper
        customStyles={styles}
        className={`${DEFAULT_BASE_CLASSNAME}-wrapper`}
      >
        <CacheProvider
          value={StyledCache("fourohtwo", `.${DEFAULT_BASE_CLASSNAME}`)}
        >
          {this.renderModalContent()}
        </CacheProvider>
      </WidgetWrapper>
    );
  }
}

InlineWidget.defaultProps = WidgetBase.defaultProps;

export default InlineWidget;
