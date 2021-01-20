import { h } from "preact";
import habitat from "preact-habitat";

import Widget from "./containers/widget";

import InlineWidget from "./containers/inline-widget";

let _habitatWidget = habitat(Widget);
let _habitatInline = habitat(InlineWidget);

_habitatWidget.render({
  selector: ".__fourohtwo-widget",
  clean: true,
  component: "area402",
});

_habitatInline.render({
  selector: ".__fourohtwo-inline",
  clean: true,
  component: "area402Inline",
});
