import { h } from "preact";

import Button from "../../components/button";

const WelcomeScreen = ({ onRequestClose }) => {
  return <Button buttonClick={onRequestClose} btnText="Close modal" />;
};

WelcomeScreen.defaultProps = {
  onRequestClose: () => {},
};

export default WelcomeScreen;
