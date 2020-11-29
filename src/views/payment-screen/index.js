import { h } from "preact";
import QRCode from "qrcode.react";

import Title from "../../components/title";
import Button from "../../components/button";
import Copy from "../../components/icons/copy";
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

const PaymentScreen = ({
  title,
  currency,
  identifier,
  onRequestClose,
  selectedAmount,
  payment_request,
}) => {
  const copyToClipboard = () => {
    var copyText = document.getElementById("lightningUrl");

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");
  };

  return (
    <Container>
      <Title title={title} onRequestClose={onRequestClose} />

      <ContentWrapper>
        <Subtitle>
          Pay with lightning:{"  "}
          <AmountPlaceholder>{`${selectedAmount}${currency}`}</AmountPlaceholder>
        </Subtitle>

        <Content>
          <QRCode
            size={90}
            level={"L"}
            renderAs={"svg"}
            value={identifier}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            includeMargin={false}
          />

          <ClipboardWrapper>
            <ClipboardText
              readOnly
              type="text"
              id="lightningUrl"
              value={identifier}
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

PaymentScreen.defaultProps = {
  onRequestClose: () => {},
};

export default PaymentScreen;
