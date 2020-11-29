import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

import Title from "../../components/title";
import Button from "../../components/button";
import ThankyouIcon from "../../components/icons/thankyou";
import {
  Content,
  Subtitle,
  Container,
  EmailInput,
  StyledSpan,
  ThankyouNote,
  EmailWrapper,
  ContentWrapper,
} from "./styled";

const ThankyouScreen = ({ title, onRequestClose, onSubscribeClick }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    return () => setEmail("");
  }, []);

  const handleSubscribeClick = () => {
    onSubscribeClick(email);
  };

  const handleInputOnChange = (ev) => {
    const value = ev.target & ev.target.value ? ev.target.value : "";

    setEmail(value);
  };

  return (
    <Container>
      <Title title={title} onRequestClose={onRequestClose} />

      <ContentWrapper>
        <Subtitle>Thank you for your support</Subtitle>

        <Content>
          <ThankyouIcon />

          <ThankyouNote>
            Make your contribution recurring. <br />
            Enter your email and we will send you a monthly invoice.
          </ThankyouNote>

          <EmailWrapper>
            <StyledSpan>Email:</StyledSpan>

            <EmailInput
              type="text"
              value={email}
              onChange={handleInputOnChange}
            />
          </EmailWrapper>
        </Content>
      </ContentWrapper>

      <Button buttonClick={handleSubscribeClick} btnText="Subscribe" />
    </Container>
  );
};

ThankyouScreen.defaultProps = {
  onRequestClose: () => {},
  onSubscribeClick: () => {},
};

export default ThankyouScreen;
