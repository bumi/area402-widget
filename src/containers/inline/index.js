import { h } from "preact";
import { CacheProvider } from "@emotion/react";

import Base from "../base";

import { DEFAULT_BASE_CLASSNAME } from "../../utils/constants";
import { StyledCache } from "../../utils/styled-cache";
import { WidgetWrapper } from "../../utils/widget-wrapper";

class Inline extends Base {

  render({}, { title, logo, isModalOpen }) {
    return (
      <WidgetWrapper className={`${DEFAULT_BASE_CLASSNAME}-wrapper`}>
        <CacheProvider
          value={StyledCache("fourohtwo", `.${DEFAULT_BASE_CLASSNAME}`)}
        >
          {this.renderModalContent()}
        </CacheProvider>
      </WidgetWrapper>
    );
  }
}

Inline.defaultProps = Object.assign(Base.defaultProps, {});

export default Inline;
