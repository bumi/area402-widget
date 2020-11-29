import { h } from "preact";

import Title from "../../components/title";
import Button from "../../components/button";
import {
  QRCode,
  Content,
  Subtitle,
  Container,
  ContentWrapper,
  ClipboardWrapper,
  AmountPlaceholder,
} from "./styled";

const PaymentScreen = ({
  onRequestClose,
  title,
  onOpenWalletClick,
  qr_code_png,
}) => {
  return (
    <Container>
      <Title title={title} onRequestClose={onRequestClose} />

      <ContentWrapper>
        <Subtitle>
          Pay with lightning <AmountPlaceholder>20$</AmountPlaceholder>
        </Subtitle>

        <Content>
          <QRCode src={qr_code_png} />

          <ClipboardWrapper>hello world</ClipboardWrapper>
        </Content>
      </ContentWrapper>

      <Button buttonClick={onOpenWalletClick} btnText="Open Wallet" />
    </Container>
  );
};

PaymentScreen.defaultProps = {
  onOpenWalletClick: () => {},
  onRequestClose: () => {},
};

export default PaymentScreen;
