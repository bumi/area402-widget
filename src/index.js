import { h } from "preact";
import habitat from "preact-habitat";

import Widget from "./containers/widget";

let _habitat = habitat(Widget);

let widgetModalState = false;

const reRenderWidgetEvent = new Event("reRenderWidget");

window.set402WidgetModal = (state) => {
  widgetModalState = state;
  console.log("widgetModalState in set402WidgetModal", widgetModalState);
  window.dispatchEvent(reRenderWidgetEvent);
};

window.addEventListener("reRenderWidget", renderWidget);

function renderWidget() {
  console.log("widgetModalState in renderWidget", widgetModalState);

  _habitat.render({
    selector: '[data-widget-host="habitat"]',
    clean: true,
    defaultProps: {
      showModal: widgetModalState,
    },
  });
}

// _habitat.render({
//   selector: '[data-widget-host="habitat"]',
//   clean: true,
//   defaultProps: {
//     showModal: widgetModalState,
//   },
// });
