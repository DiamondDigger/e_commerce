import React from "react";
import { Typography, Button } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({
  checkoutToken,
  shippingData,
  nextStep,
  backStep,
  onCaptureCheckout,
}) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;
    console.log("STRIPE _ ", stripe);
    console.log("ELEMENTS _ ", elements);
    const cardElement = elements.getElement(CardElement);
    console.log("ELEMENTS _ cardElement ", elements);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("ERROR_PAYMENT", error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: "International",
          street: shippingData.address1,
          town_city: shippingData.city,
          country_state: shippingData.subdivision,
          zip_postal_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: {
          shipping_method: shippingData.shippingOption,
        },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      console.log("from payment ---onCaptureCheckout--");
      console.log("ORDER_DATA", orderData);
      console.log("CHECKOUT_TOKEN_ID", checkoutToken.id);
      onCaptureCheckout(checkoutToken.id, orderData);
      nextStep();
    }
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} shippingData={shippingData} />
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
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
