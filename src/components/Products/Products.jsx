import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Runnig shoes.",
    price: "$5",
    image:
      "https://assets.ajio.com/medias/sys_master/root/hd4/h99/14092964397086/-1117Wx1400H-460455972-black-MODEL.jpg",
  },
  {
    id: 2,
    name: "Mackbook",
    description: "Apple macbook.",
    price: "$10",
    image:
      "https://www.ixbt.com/img/r30/00/02/29/29/apple-macbook-air-early-2020-big.jpg",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
