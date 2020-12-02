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
    setDonationAmount("");
  };

  const onTagSelect = (val) => {
    setDonationAmount(val);
    handleNextClick(val);
  };

  const handleNextClick = (val) => {
    const value = val || donationAmount || inputAmount;
    const cents = parseFloat(value) * 100;
    const amount_in_cents = parseInt(cents, 10);
    onNextClick(amount_in_cents);
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
