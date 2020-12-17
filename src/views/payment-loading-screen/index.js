import { h } from "preact";
import styled from "@emotion/styled";

import Spinner from "../../components/spinner";
import { Content, Container, ContentWrapper } from "../../utils/common-styles";

const Subtitle = styled.p`
  font-family: "Open Sans", "Lucida Sans", Helvetica, Arial, sans-serif;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  margin-top: 16px;
  letter-spacing: 0em;
  text-align: center;
`;

const PaymentFetchingScreen = (props) => {
  return (
    <Container>
      <ContentWrapper>
        <Content>
          <Spinner {...props} />
          <Subtitle>Fetching payment details</Subtitle>
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default PaymentFetchingScreen;
