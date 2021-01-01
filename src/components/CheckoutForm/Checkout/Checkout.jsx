import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Divider,
  Link,
  CircularProgress,
} from "@material-ui/core";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

import useStyles from "./styles";
import { commerce } from "../../../lib/commerce";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({ cart, onCaptureCheckout, order }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setcheckoutToken] = useState({});
  const [shippingData, setShippingData] = useState({});

  const classes = useStyles();
  let lastStep = false;

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        console.log("**GENERATE_Token**", token);

        setcheckoutToken(token);
      } catch (error) {}
    };

    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prev) => prev + 1);
  const previousStep = () => setActiveStep((prev) => prev - 1);

  const next = (data) => {
    setShippingData(data);
    console.log("***GET SHIPPING DATA***", data);

    nextStep();
  };

  const Confirmation = () =>
    order.customer ? (
      <div>
        <Typography variant="h5">
          Thank you for your purchase, {order.customer.firstname}
          {order.customer.secondname}
        </Typography>
        <Divider />
        <br />
        <Typography variant="subtitle2">
          Order ref: {order.customer_reference}
        </Typography>
        <br />
        <Button component={Link} to="/" variant="outlined" color="secondary">
          Back Home
        </Button>
      </div>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        backStep={previousStep}
        onCaptureCheckout={onCaptureCheckout}
      />
    );

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography className={classes.title} align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel className={classes.label}>{step}</StepLabel>
                {
                  ((lastStep = !lastStep),
                  lastStep ? (
                    <div className={classes.verticalLine}></div>
                  ) : undefined)
                }
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
