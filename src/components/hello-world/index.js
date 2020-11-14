import { h, Component } from "preact";
import { Title } from "./styled";

export default class App extends Component {
  render(props) {
    return (
      <div>
        <Title>Hello, World!</Title>
      </div>
    );
  }
}
