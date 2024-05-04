import { Box, Button, Stack, Typography, colors } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";
import { amber, blueGrey, orange, pink, red} from "@mui/material/colors";
import { type } from "@testing-library/user-event/dist/type";
import { Fullscreen } from "@mui/icons-material";
import { light } from "@mui/material/styles/createPalette";

const NavBar = () => {
  const navigate = useNavigate();
  const basket=useSelector(state=>state.basket)
  return (
    <Box display="flex" my={5} mx={10} justifyContent="space-between" sx={{backgroundColor: "pink"}} padding={1} paddingBlockStart={1.5} borderRadius="10px" boxShadow="2px 2px 10px 10px grey"  >
      <Typography variant="h3"  sx={{":hover":{cursor:"pointer"}}}  onClick={() => navigate("/")} color="grey" fontFamily="Georgia" fontWeight="bold" display="flex" justifyContent="center" alignItems="center" >
      BEST STORE
      </Typography>
      <Link to="/basket" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}> 
        <AddShoppingCartIcon color= "secondary" />
        {
          basket.length>0 && (<Typography variant="caption" component="span" sx={{backgroundColor:"amber.main", width:"1rem",height:"1rem", borderRadius:"50%", textAlign:"center", marginLeft:"-10px", marginBottom:"1rem" }} >{basket.length}</Typography>)
        }
      </Link>
      
    </Box>
  );
};

export default NavBar;