import { h } from "preact";
import habitat from "preact-habitat";

import Widget from "./views/widget";

let _habitat = habitat(Widget);

_habitat.render({
  selector: '[data-widget-host="habitat"]',
  clean: true,
});
