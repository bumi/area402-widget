import { h } from "preact";

import Title from "../../components/title";
import Button from "../../components/button";
import { Content, Subtitle, Container, ContentWrapper } from "./styled";

const WelcomeScreen = ({ onRequestClose, title, onDonateClick }) => {
  return (
    <Container>
      <Title title={title} onRequestClose={onRequestClose} />

      <ContentWrapper>
        <Subtitle>Thanks for your interest!</Subtitle>

        <Content>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Content>
      </ContentWrapper>

      <Button buttonClick={onDonateClick} btnText="Donate Now" />
    </Container>
  );
};

WelcomeScreen.defaultProps = {
  onDonateClick: () => {},
  onRequestClose: () => {},
};

export default WelcomeScreen;
