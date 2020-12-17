import React from "react";
import Grid from "@material-ui/core";

const products = [
  { id: 1, name: "Shoes", description: "Runnig shoes." },
  { id: 2, name: "Mackbook", description: "Apple macbook." },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {Products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
