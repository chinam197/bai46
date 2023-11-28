import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../configs/client";

export const getInfoProduct = createAsyncThunk("getInfoProduct", async (id) => {
  const { response, data } = await client.get(`/products/${id}`);

  return data.data;
});
