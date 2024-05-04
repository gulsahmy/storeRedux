import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Basket from "../pages/Basket";
import NotFound from "../pages/NotFound";
import Navbar from "../components/NavBar";
import { Box } from "@mui/material";

const AppRouter = () => {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default AppRouter;