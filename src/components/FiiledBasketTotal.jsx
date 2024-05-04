import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import {
  delBasket,
  minusBasket,
  plusBasket,
  removeProduct,
} from "../redux/action/basketAction";

const FiiledBasketTotal = () => {
  const basketItems = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  const handlePlus = (id) => {
    const item = basketItems.find((item) => item.id === id);
    if (item.quantity < 3) {
      dispatch(plusBasket(id));
    } else {
      alert("En fazla 3 ürün ekleyebilirsiniz.");
    }
  };

  const handleMinus = (id) => {
    const item = basketItems.find((item) => item.id === id);
    if (item.quantity > 1) {
      dispatch(minusBasket(id));
    }
  };

  const handleClean = () => {
    dispatch(delBasket());
  };

  const basketFullPrice = () => {
    let fullPrice = 0;
    basketItems.forEach((item) => {
      fullPrice += item.price * item.quantity;
    });
    return fullPrice.toFixed(2);
  };

  const cardStyle = {
    maxWidth: 345,
    m: 5,
    maxHeight: 600,
    p: 1,
    width: 250,
    boxShadow: "2px 2px 25px 10px gray",
    borderRadius: "15px",
  };

  return (
    <Box>
      <Box display="flex" justifyContent={"space-evenly"} flexWrap="wrap">
        {basketItems.map((item) => (
          <Box key={item.id}>
            <Card sx={cardStyle} id={item.id}>
              <CardMedia
                component="img"
                height="250"
                image={item.image}
                alt={item.title}
                sx={{ objectPosition: "center", objectFit: "contain" }}
              />
              <Box display="flex" justifyContent={"space-between"} gap={2} m={1.5}>
                <Typography variant="body2" color="grey">
                  {item.title}
                </Typography>
                <Typography color="gray">{item.price}$</Typography>
              </Box>
              <Box display="flex" justifyContent="flex-start" alignItems="center">
                <Button onClick={() => handleMinus(item.id)}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button onClick={() => handlePlus(item.id)}>+</Button>
                <Button variant="contained" onClick={() => handleRemove(item.id)}>REMOVE</Button>
              </Box>
            </Card>
          </Box>
        ))}
      </Box>
      <Box display="flex" justifyContent="space-evenly" alignItems="center" m={5}>
        <Typography color="textPrimary" borderBottom="3px solid" p={1}>
          Subtotal : <span style={{ color: "black", fontWeight:"bold" }}>{basketFullPrice()}$</span>
        </Typography>
        <Button variant="contained" style={{ color: "pink", fontWeight: "bold" }} onClick={handleClean}>
          EMPTY CARD
        </Button>
      </Box>
    </Box>
  );
};

export default FiiledBasketTotal;