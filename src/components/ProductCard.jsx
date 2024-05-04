import React from "react";
import { useDispatch, useSelector } from "react-redux"; //??
import { addBasket, delBasket } from "../redux/action/basketAction";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Box } from "@mui/material";

const ProductCard = ({ id, image, description, title, category, price }) => {
  const basketItem = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const handleProduct = () => {
    if (!basketItem.find((item) => item.id === id)) {
      return dispatch(
        addBasket({ id, image, description, title, category, price })
      );
    }

    // console.log(addBasket());
  };

  return (
    <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600, p: 1, width: 250,boxShadow:"2px 2px 25px 10px gray", borderRadius:"15px" }}>
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={title}
        sx={{ objectPosition: "center", objectFit: "contain" }}
      />
      <Box display="flex" justifyContent={"space-between"} gap={2}  m={1.5}>
        <Typography variant="body2" color="primary">
          {title}
        </Typography>
        <Typography color="primary">{price}$</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} alignItems="center" color="amber.light" >
       <Typography color="gray" fontSize="10px" >{category}</Typography>
        <IconButton aria-label="share" >
          <ShoppingBasketIcon onClick={handleProduct} />
        </IconButton>
      </Box>
    </Card>
  );
};

export default ProductCard;