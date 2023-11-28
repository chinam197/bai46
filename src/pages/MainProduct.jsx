import React from "react";
import Product from "../components/Product";
import Cart from "../components/Cart";
import InfoProduct from "../components/InfoProduct";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
const MainProduct = () => {
  const showCart = useSelector((state) => state.product.showCart);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/1" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/info" element={<InfoProduct />} />
      </Routes>
    </>
  );
};

export default MainProduct;
//  {/* {!showCart ?  : <Cart />} */}
//       {/* <InfoProduct /> */}
