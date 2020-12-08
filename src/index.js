import { h } from "preact";
import habitat from "preact-habitat";

import Widget from "./containers/widget";

let _habitat = habitat(Widget);

_habitat.render({
  selector: '.fourohtwo-widget',
  clean: true,
  component: "area402",
});
