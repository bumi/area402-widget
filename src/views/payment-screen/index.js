import { h } from "preact";
import QRCode from "qrcode.react";
import { useEffect, useState } from "preact/hooks";

import Copy from "../../components/icons/copy";
import { secondsToHms } from "../../utils/helper";
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

const TIME_DEFAULT_STATE = { hours: 0, minutes: 0, seconds: 0 };

const PaymentScreen = ({
  payment_request,
  formatted_amount,
  expiry = 3600,
}) => {
  const [countdownTime, setCountdownTime] = useState(TIME_DEFAULT_STATE);
  const [expiryTime, setExpiryTime] = useState(expiry || 3600);

  useEffect(() => {
    setInterval(() => {
      setExpiryTime(expiry - 1);
      setCountdownTime(secondsToHms(expiryTime - 1));
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(countdownTime);
  }, [countdownTime]);

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
