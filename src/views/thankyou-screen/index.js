import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

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

const ThankyouScreen = ({ onSubscribeClick, enableEmailSubscription }) => {
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
      <ContentWrapper>
        <Subtitle>Thank you for your support</Subtitle>

        <Content>
          <ThankyouIcon />

          {enableEmailSubscription && (
            <div>
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
            </div>
          )}
        </Content>
      </ContentWrapper>

      {enableEmailSubscription && (
        <Button buttonClick={handleSubscribeClick} btnText="Subscribe" />
      )}
    </Container>
  );
};

ThankyouScreen.defaultProps = {
  onSubscribeClick: () => {},
};

export default ThankyouScreen;
