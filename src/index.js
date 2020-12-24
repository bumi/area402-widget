import { h } from "preact";
import habitat from "preact-habitat";

import Widget from "./containers/widget";

import InlineWidget from "./containers/inline-widget";

let _habitat = habitat(Widget);
let _habitat2 = habitat(InlineWidget);

_habitat.render({
  selector: ".__fourohtwo",
  clean: true,
  component: "area402",
});

_habitat2.render({
  selector: ".inline-fourohtwo",
  clean: true,
  component: "area402Inline",
});
