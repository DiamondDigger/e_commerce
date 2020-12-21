import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

const Cart = ({ cart }) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <div>
      <Typography variant="subtitle1">
        You have no items in your shopping cart, start adding some!
      </Typography>
    </div>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <Button
          className={classes.emptyButton}
          size="large"
          type="button"
          variant="contained"
          color="secondary"
        >
          Empty Cart
        </Button>
        <Button
          className={classes.checkoutButton}
          size="large"
          type="button"
          variant="contained"
          color="primary"
        >
          Checkout
        </Button>
      </div>
    </>
  );

  if (!cart.line_items) {
    return "Loading...";
  }

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h3">Your shopping cart</Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
