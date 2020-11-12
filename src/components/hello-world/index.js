import { h, Component } from "preact";
import "./style.scss";

export default class App extends Component {
  render(props) {
    console.log(props);
    return (
      <div>
        <h1 style={{ color: props.color }}>Hello, World!</h1>
      </div>
    );
  }
}
