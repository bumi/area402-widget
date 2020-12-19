import { h } from "preact";

import { SpinnerWrapper } from "./styled";

const Spinner = (props) => <SpinnerWrapper {...props} />;

Spinner.defaultProps = {
  width: 14,
  height: 14,
  color: "#fff",
};

export default Spinner;
