import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

import Title from "../../components/title";
import Button from "../../components/button";

import {
  TagItem,
  Content,
  Subtitle,
  Container,
  CustomInput,
  TagsWrapper,
  ContentWrapper,
} from "./styled";

const DONATION_AMOUNTS = [
  {
    text: "1€",
    value: "1",
  },
  {
    text: "2€",
    value: "2",
  },
  {
    text: "5€",
    value: "5",
  },
  {
    text: "10€",
    value: "10",
  },
];

const DonateScreen = ({ onRequestClose, onNextClick, title }) => {
  const [inputAmount, setInputAmount] = useState("");
  const [donationAmount, setDonationAmount] = useState("");

  const handleCustomInput = (e) => {
    setInputAmount(e.target.value ? e.target.value : "");
  };

  const onTagSelect = (val) => setDonationAmount(val);

  const handleNextClick = () => {
    const value = parseInt(donationAmount || inputAmount, 10);
    onNextClick(value);
  };

  return (
    <Container>
      <Title title={title} onRequestClose={onRequestClose} />

      <ContentWrapper>
        <Subtitle>How much would you like to contribute?</Subtitle>

        <Content>
          <TagsWrapper>
            {DONATION_AMOUNTS.map((tag, index) => (
              <TagItem
                key={index}
                onClick={() => onTagSelect(tag.value)}
                selected={tag.value === donationAmount}
              >
                {tag.text}
              </TagItem>
            ))}
          </TagsWrapper>

          <CustomInput
            type="number"
            value={inputAmount}
            onChange={handleCustomInput}
          />
        </Content>
      </ContentWrapper>

      <Button buttonClick={handleNextClick} btnText="Next" />
    </Container>
  );
};

DonateScreen.defaultProps = {
  onNextClick: () => {},
  onRequestClose: () => {},
};

export default DonateScreen;
