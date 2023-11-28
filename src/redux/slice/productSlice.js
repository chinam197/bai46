import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../../middlewares/getProductsMiddleware";
import { getInfoProduct } from "../../middlewares/getInfoProduct";
import { useNavigate } from "react-router-dom";
const initialState = {
  getProducts: [],
  status: "idle",
  cartQuantity: 0,
  cart: [],
  showCart: false,
  infoProduct: {
    status: "idle",
    product: [],
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCartQuantityIncrement: (state, action) => {
      state.cartQuantity += action.payload;
    },
    setCartQuantity: (state, action) => {
      state.cartQuantity = action.payload;
    },

    setCartQuantityDecrement: (state, action) => {
      state.cartQuantity -= action.payload;
    },
    setAddProduct: (state, action) => {
      state.cart.push(action.payload);
    },
    setShowCart: (state, action) => {
      state.showCart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.getProducts = action.payload;
      state.status = "success";
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.status = "error";
    });
    builder.addCase(getProduct.pending, (state) => {
      state.status = "pending";
    });

    //
    builder.addCase(getInfoProduct.fulfilled, (state, action) => {
      state.infoProduct.product = action.payload;
      state.infoProduct.status = "success";
    });
    builder.addCase(getInfoProduct.rejected, (state) => {
      state.infoProduct.status = "error";
    });
    builder.addCase(getInfoProduct.pending, (state) => {
      state.infoProduct.status = "pending";
    });
  },
});
