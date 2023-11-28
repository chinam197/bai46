import React from "react";
import HeaderNav from "./pages/HeaderNav";
import MainProduct from "./pages/MainProduct";
import FooterNav from "./pages/FooterNav";
import "./assets/main.css";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
const App = () => {
  const showCart = useSelector((state) => state.product.showCart);
  return (
    <>
      <h1>PRODUCTS</h1>
      <HeaderNav />
      <MainProduct />
      {showCart ? "" : <FooterNav />}

      <ToastContainer autoClose={4000} pauseOnHover={false} />
    </>
  );
};

export default App;
