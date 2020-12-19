import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";

const Cart = ({ cart }) => {
  const isEmpty = !cart.line_items.length();

  const EmptyCart = () => (
    <div>
      <Typography variant="subtitle1">
        You have no items in your shopping cart, start adding some!
      </Typography>
    </div>
  );

  const FilledCart = (cart) => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div>
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

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h3">Your shopping cart</Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
