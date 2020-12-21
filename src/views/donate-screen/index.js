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
  disableCustomAmount,
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
    // TODO: better check for invalid amounts
    if (amount === "") {
      return null;
    }
    const cents = parseFloat(amount) * 100;

    return parseInt(cents, 10);
  };

  const handleNextClick = () => {
    const amountInCents = getAmountInCents(donationAmount || inputAmount);

    if (!amountInCents || typeof amountInCents !== "number" || amountInCents < 1 || amountInCents > 10000) {
      return;
    }

    onNextClick(amountInCents);
  };

  return (
    <Container>
      <ContentWrapper>
        <Content>
          <TagsWrapper className="__fourohtwo-payment-options">
            {Object.keys(paymentOptions).map((key, index) => {
              const amount = paymentOptions[key];
              return (
                <TagItem
                  key={index}
                  onClick={() => onTagSelect(amount)}
                  selected={amount === donationAmount}
                  className="__fourohtwo-payment-option-select"
                >
                  {key}
                </TagItem>
              );
            })}
            {!disableCustomAmount && (
              <CustomInput
                type="number"
                value={inputAmount}
                onChange={handleCustomInput}
                placeholder="_€"
                className="__fourohtwo-payment-option-input"
              />
            )}
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
