import { h, Component } from "preact";
import { CacheProvider } from '@emotion/react'
import { WidgetWrapper, Title, StyledCache } from "./styled";

export default class App extends Component {
  // WidgetWrapper makes sure to reset global CSS styles within the widget
  // The custom CacheProvider makes sure that emotion creats CSS with a higher specificity than the reset CSS
  render(props) {
    return (
      <WidgetWrapper>
        <CacheProvider value={StyledCache}>
          <Title>Hello, World!</Title>
        </CacheProvider>
      </WidgetWrapper>
    );
  }
}
