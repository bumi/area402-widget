import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

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

  // Think how to clear this
  const handleCloseClick = () => {
    setDefaults();
    onRequestClose();
  };

  const handleCustomInput = (e) => {
    setInputAmount(e.target.value ? e.target.value : "");
    setDonationAmount("");
  };

  const onTagSelect = (val) => {
    const amountInCents = getAmountInCents(val);
    setDonationAmount(val);

    onNextClick(amountInCents);
  };

  const getAmountInCents = (amount) => {
    const cents = parseFloat(amount) * 100;

    return parseInt(cents, 10);
  };

  const handleNextClick = () => {
    const amountInCents = getAmountInCents(donationAmount || inputAmount);

    onNextClick(amountInCents);
  };

  return (
    <Container>
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
