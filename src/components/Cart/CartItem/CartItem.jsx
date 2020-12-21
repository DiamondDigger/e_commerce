import React from "react";

import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@material-ui/core";

import useStyles from "./styles";

const CartItem = ({ item }) => {
  const classes = useStyles();

  console.log("**ITEM CART**", item);

  return (
    <Card>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cartContent}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h5">{item.price.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div>
          <Button type="button" size="small">
            -
          </Button>
          <Typography variant="h6">{item.quantity}</Typography>
          <Button type="button" size="small">
            +
          </Button>
        </div>
        <Button type="button" color="primary" variant="contained">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
