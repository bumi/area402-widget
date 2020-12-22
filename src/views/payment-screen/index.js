import { h } from "preact";
import QRCode from "qrcode.react";
import { Line } from "rc-progress";
import { useEffect, useState } from "preact/hooks";

import {
  Button,
  Content,
  Subtitle,
  Container,
  ClipboardText,
  CountdownText,
  ContentWrapper,
  ClipboardWrapper,
  AmountPlaceholder,
} from "./styled";
import Copy from "../../components/icons/copy";
import { secondsToHms } from "../../utils/helper";
import { DEFAULT_BASE_CLASSNAME } from "../../utils/constants";

const PaymentScreen = ({
  value,
  expiry,
  payment_request,
  formatted_amount,
}) => {
  let timer = 0;
  const [remainingPercent, setRemainingPercent] = useState(0);
  const [expiryInSeconds, setExpiryInSeconds] = useState(expiry);
  const [countdownTime, setCountdownTime] = useState(secondsToHms(expiry));
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  useEffect(() => {
    startTimer();

    return () => clearInterval(timer);
  }, [expiryInSeconds]);

  const startTimer = () => {
    if (timer == 0 && expiryInSeconds > 0) {
      timer = setInterval(countDown, 1000);
    }
  };

  const updatePercentage = (counter) => {
    const difference = expiry - counter;

    setRemainingPercent(100 - (difference / expiry) * 100);
  };

  const countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = expiryInSeconds - 1;

    updatePercentage(seconds);

    setExpiryInSeconds(seconds);
    setCountdownTime(secondsToHms(seconds));

    // Check if we're at zero.
    if (seconds == 0) {
      return;
    }
  };

  const copyToClipboard = () => {
    setCopiedToClipboard(true);
    navigator.clipboard.writeText(payment_request).then(() => {
      setTimeout(() => setCopiedToClipboard(false), 100);
    });
  };

  return (
    <Container>
      <ContentWrapper>
        <Subtitle>
          <AmountPlaceholder>{`${formatted_amount}  (${value} sats)`}</AmountPlaceholder>
        </Subtitle>

        <Content>
          <QRCode
            size={120}
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
              <Copy active={copiedToClipboard} />
            </span>
          </ClipboardWrapper>
        </Content>
      </ContentWrapper>

      <Button
        href={`lightning:${payment_request}`}
        className={`${DEFAULT_BASE_CLASSNAME}-button`}
      >
        Open Wallet
      </Button>

      <CountdownText>{`${countdownTime.minutes} min ${countdownTime.seconds} sec left`}</CountdownText>

      <Line
        percent={remainingPercent}
        trailWidth="1"
        strokeWidth="1"
        trailColor="#ccc"
        strokeColor="var(--primary-color)"
      />
    </Container>
  );
};

PaymentScreen.defaultProps = {
  payment_request: "",
};

export default PaymentScreen;
