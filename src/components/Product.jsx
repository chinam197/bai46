import React, { useEffect } from "react";
import { getProduct } from "../middlewares/getProductsMiddleware";
import Loading from "./Loading";
import { useSelector, useDispatch } from "react-redux";
import { productSlice } from "../redux/slice/productSlice";
import { toast } from "react-toastify";
import { getInfoProduct } from "../middlewares/getInfoProduct";
import { useNavigate } from "react-router-dom";
const { setCartQuantityIncrement } = productSlice.actions;
const Product = () => {
  const navigate = useNavigate();
  let carts = JSON.parse(localStorage.getItem("my_cart")) || [];
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.getProducts);
  const status = useSelector((state) => state.product.status);
  const cart = useSelector((state) => state.product.cart);
  const handlCartQuantity = (product) => {
    dispatch(setCartQuantityIncrement(1));
    let infoProduct = { ...product };
    infoProduct.amount = infoProduct.quantity;
    delete infoProduct.quantity;
    let existingProductIndex = carts.findIndex(
      ({ _id }) => _id === product._id
    );

    if (existingProductIndex !== -1) {
      // If the product already exists in the cart, update quantity
      carts[existingProductIndex].amount--;
      carts[existingProductIndex].quantity++;
    } else {
      // If the product is not in the cart, add it
      infoProduct.quantity = 1;
      carts.push(infoProduct);
    }
    localStorage.setItem("my_cart", JSON.stringify(carts));
    toast.success("Thêm sản phẩm vào giỏ hàng thành công !");
  };

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  if (status === "error") {
    return <h1>Đã có lỗi xảy ra</h1>;
  }
  return (
    <div id="flex-container">
      {status !== "idle" &&
        (status === "pending" ? (
          <Loading />
        ) : (
          products.map(
            ({
              _id,
              name,
              brand,
              category,
              description,
              image,
              price,
              quantity,
              updatedAt,
            }) => {
              return (
                <div id="flex-item" key={_id}>
                  <div
                    id="product-head"
                    onClick={() => {
                      navigate("/info");
                      dispatch(getInfoProduct(_id));
                    }}
                  >
                    <img src={image} alt={_id + "image"} />
                    <h2>{name}</h2>
                  </div>
                  <div id="product-info">
                    <h2>
                      <span id="dolar-span">$</span>
                      {price}
                    </h2>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 256 256"
                      id="shopping-cart"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
                        handlCartQuantity({
                          _id,
                          name,
                          brand,
                          category,
                          description,
                          image,
                          price,
                          quantity,
                          updatedAt,
                        });
                      }}
                    >
                      <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z" />
                    </svg>
                  </div>
                </div>
              );
            }
          )
        ))}
    </div>
  );
};

export default Product;
