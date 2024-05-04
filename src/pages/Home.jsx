import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Box, Button, ButtonGroup, Radio, Typography } from "@mui/material";
import { Margin, MarginTwoTone } from "@mui/icons-material";
import { amber } from "@mui/material/colors";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  const getProduct = async () => {
    try {
      const URL = `https://fakestoreapi.com/products`;

      const res = await axios(URL);
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  const filterProduct = () => {
    if (category === "") {
      return products;
    } else {
      return products.filter((product) => product.category == category);
    }
  };

  return (
    <Box >
      <Typography  textAlign="center">
      <ButtonGroup  variant="text" size="large" >
        <Button style={{color:"grey", fontSize:"16px"}} onClick={() => setCategory("")}>ALL</Button>
        <Button style={{color:"grey", fontSize:"16px"}} onClick={() => setCategory("electronics")}>Electronics</Button>
        <Button style={{color:"grey", fontSize:"16px"}} onClick={() => setCategory("jewelery")}>Jewelery</Button>
        <Button style={{color:"grey", fontSize:"16px"}} onClick={() => setCategory("men's clothing")}>Men</Button>
        <Button style={{color:"grey", fontSize:"16px"}} onClick={() => setCategory("women's clothing")}>Women</Button>
      </ButtonGroup>
      </Typography>
      <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="space-evenly" >
        {filterProduct().map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </Box>
    </Box>
  );
}; // useEffecti bir fonc içinde kullanmadığım için hata aldım

export default Home;
