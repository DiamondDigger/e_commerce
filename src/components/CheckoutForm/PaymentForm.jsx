import React from "react";
import { Typography, Button } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";

const stripePromise = loadStripe("stripePublicApiKey");

const PaymentForm = ({ checkoutToken, backStep }) => {
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {(elements, stripe) => (
            <form>
              <br />
              <br />
              <CardElement />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "20px",
                }}
              >
                <Button variant="outlined" color="secondary" onClick={backStep}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!stripe}
                >
                  Pay {checkoutToken.live.total.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
