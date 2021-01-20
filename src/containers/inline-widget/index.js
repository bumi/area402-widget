import { h } from "preact";
import { CacheProvider } from "@emotion/react";

import WidgetBase from "../base-class";
import Title from "../../components/title";
import { StyledCache } from "../../utils/styled-cache";
import { WidgetWrapper } from "../../utils/widget-wrapper";
import { DEFAULT_BASE_CLASSNAME } from "../../utils/constants";

class InlineWidget extends WidgetBase {
  render({}, { styles, title, logo }) {
    return (
      <WidgetWrapper
        customStyles={styles}
        className={`${DEFAULT_BASE_CLASSNAME}-wrapper`}
      >
        <CacheProvider
          value={StyledCache("fourohtwo", `.${DEFAULT_BASE_CLASSNAME}`)}
        >
          <Title logo={logo} title={title} />

          {this.renderWidgetContent()}
        </CacheProvider>
      </WidgetWrapper>
    );
  }
}

InlineWidget.defaultProps = Object.assign(WidgetBase.defaultProps, {});

export default InlineWidget;
