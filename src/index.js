import { h } from "preact";
import habitat from "preact-habitat";

import Widget from "./containers/widget";

import InlineWidget from "./containers/inline-widget";

export default InlineWidget;

let _habitat = habitat(Widget);

_habitat.render({
  selector: ".__fourohtwo",
  clean: true,
  component: "area402",
});
