import { h } from "preact";
import styled from "@emotion/styled";

import Spinner from "../../components/spinner";
import { Content, Container, ContentWrapper } from "../../utils/common-styles";

const LoadingScreen = (props) => {
  return (
    <Container>
      <ContentWrapper>
        <Content>
          <Spinner {...props} />
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default LoadingScreen;
