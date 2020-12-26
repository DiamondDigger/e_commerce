import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

const Review = ({ checkoutToken }) => {
  if (checkoutToken) {
    console.log("checkout from Review ", checkoutToken);
    return (
      <>
        <Typography variant="h6">Order Summary</Typography>
        <List>
          {checkoutToken.live.line_items.map((product) => (
            <ListItem key={product.id} style={{ padding: "10px 0" }}>
              <ListItemText
                primary={product.name}
                secondary={`Quantity: x ${product.quantity}`}
              ></ListItemText>
              <Typography variant="body2">
                {product.price.formatted_with_symbol}
              </Typography>
            </ListItem>
          ))}
          <Typography variant="h6" style={{ paddingTop: "20px" }}>
            Total
          </Typography>
          <hr style={{ weight: "100%" }} />
          <ListItem style={{ padding: "0 " }}>
            <ListItemText
              secondary={`Shipping tax: ${checkoutToken.live.tax.amount.formatted_with_symbol}`}
            ></ListItemText>
            <Typography variant="h6" style={{ fontWeight: 700 }} gutterBottom>
              {checkoutToken.live.total_with_tax.formatted_with_symbol}
            </Typography>
          </ListItem>
          <hr style={{ weight: "100%" }} />
        </List>
      </>
    );
  }
};

export default Review;
