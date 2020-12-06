import { h } from "preact";
import QRCode from "qrcode.react";

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

const PaymentScreen = ({ payment_request, formatted_amount }) => {
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
