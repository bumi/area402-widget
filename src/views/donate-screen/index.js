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

const DEFAULT_PAYMENT_OPTIONS = [2, 5, 10];

const DonateScreen = ({
  title,
  currency,
  onNextClick,
  onRequestClose,
  currencyOptions,
}) => {
  const [inputAmount, setInputAmount] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const paymentOptions =
    currencyOptions.length > 0 ? currencyOptions : DEFAULT_PAYMENT_OPTIONS;

  useEffect(() => {
    return () => {
      setDefaults();
    };
  }, []);

  const setDefaults = () => {
    setInputAmount("");
    setDonationAmount("");
  };

  const handleCloseClick = () => {
    setDefaults();
    onRequestClose();
  };

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
      <Title title={title} onRequestClose={handleCloseClick} />

      <ContentWrapper>
        <Subtitle>How much would you like to contribute?</Subtitle>

        <Content>
          <TagsWrapper>
            {paymentOptions.map((value, index) => (
              <TagItem
                key={index}
                onClick={() => onTagSelect(value)}
                selected={value === donationAmount}
              >
                {`${value} ${currency}`}
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
