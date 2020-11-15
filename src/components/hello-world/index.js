import { h, Component } from "preact";
import { WidgetWrapper, Title } from "./styled";

export default class App extends Component {
  render(props) {
    return (
      <WidgetWrapper>
        <Title>Hello, World!</Title>
      </WidgetWrapper>
    );
  }
}
