import { h } from "preact";

import Title from "../../components/title";
import Button from "../../components/button";
import { Content, Subtitle, Container, ContentWrapper } from "./styled";

const DonateScreen = ({ onRequestClose, onNextClick, title }) => (
  <Container>
    <Title title={title} onRequestClose={onRequestClose} />

    <ContentWrapper>
      <Subtitle>How much would you like to contribute?</Subtitle>

      <Content>
        donation amount tags comes here and custom input field comes here
      </Content>
    </ContentWrapper>

    <Button buttonClick={onNextClick} btnText="Next" />
  </Container>
);

DonateScreen.defaultProps = {
  onNextClick: () => {},
  onRequestClose: () => {},
};

export default DonateScreen;
