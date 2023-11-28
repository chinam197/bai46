import React from "react";
import Product from "../components/Product";
import { useNavigate } from "react-router-dom";
const Home = () => {
  // const navigate = useNavigate();
  // const handleProduct = () => {
  //   navigate("/product/1");
  // };

  return (
    <div>
      <Product />
    </div>
  );
};

export default Home;
