import { h } from "preact";
import QRCode from "qrcode.react";
import { useEffect, useState } from "preact/hooks";

import {
  Content,
  Subtitle,
  Container,
  StyledButton,
  ClipboardText,
  ContentWrapper,
  ClipboardWrapper,
  AmountPlaceholder,
} from "./styled";
import Copy from "../../components/icons/copy";
import { secondsToHms } from "../../utils/helper";

const PaymentScreen = ({ payment_request, formatted_amount, expiry }) => {
  let timer = 0;
  const [expiryInSeconds, setExpiryInSeconds] = useState(expiry);
  const [countdownTime, setCountdownTime] = useState(secondsToHms(expiry));

  useEffect(() => {
    startTimer();

    return () => clearInterval(timer);
  }, [expiryInSeconds]);

  const startTimer = () => {
    if (timer == 0 && expiryInSeconds > 0) {
      timer = setInterval(countDown, 1000);
    }
  };

  const countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = expiryInSeconds - 1;

    setExpiryInSeconds(seconds);
    setCountdownTime(secondsToHms(seconds));

    // Check if we're at zero.
    if (seconds == 0) {
      return;
    }
  };

  const copyToClipboard = () => {
    var copyText = document.getElementById("lightningUrl");

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");
  };

  return (
    <Container>
      <ContentWrapper>
        <Subtitle>
          Pay with lightning:{"  "}
          <AmountPlaceholder>{formatted_amount}</AmountPlaceholder>
        </Subtitle>

        <Content>
          <QRCode
            size={90}
            level={"L"}
            renderAs={"svg"}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            includeMargin={false}
            value={payment_request}
          />

          <ClipboardWrapper>
            <ClipboardText
              readOnly
              type="text"
              id="lightningUrl"
              value={payment_request}
            />

            <span onClick={copyToClipboard}>
              <Copy />
            </span>
          </ClipboardWrapper>
        </Content>
      </ContentWrapper>

      <StyledButton href={`lightning:${payment_request}`}>
        Open Wallet
      </StyledButton>
    </Container>
  );
};

export default PaymentScreen;
