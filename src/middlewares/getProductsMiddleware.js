import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../configs/client";

export const getProduct = createAsyncThunk("getProduct", async () => {
  const { response, data } = await client.get("/products?limit=10&page=1");
  return data.data.listProduct;
});
