import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

import {
  Content,
  Subtitle,
  Container,
  ContentWrapper,
} from "../../utils/common-styles";
import Button from "../../components/button";
import { TagItem, CustomInput, TagsWrapper } from "./styled";

const DonateScreen = ({
  currency,
  isLoading,
  onNextClick,
  paymentOptions,
}) => {
  const [inputAmount, setInputAmount] = useState("");
  const [donationAmount, setDonationAmount] = useState("");

  useEffect(() => {
    return () => {
      setDefaults();
    };
  }, []);

  const setDefaults = () => {
    setInputAmount("");
    setDonationAmount("");
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
            <CustomInput
              type="number"
              value={inputAmount}
              onChange={handleCustomInput}
              placeholder="_€"
            />
          </TagsWrapper>

        </Content>
      </ContentWrapper>

      <Button
        btnText="Next"
        isLoading={isLoading}
        buttonClick={handleNextClick}
      />
    </Container>
  );
};

DonateScreen.defaultProps = {
  onNextClick: () => {},
};

export default DonateScreen;
