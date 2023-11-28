import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productSlice } from "../redux/slice/productSlice";
import { toast } from "react-toastify";
const {
  setCartQuantityIncrement,
  setCartQuantityDecrement,
  setAddProduct,
  setCartQuantity,
  setShowCart,
} = productSlice.actions;
const Cart = () => {
  const [myCart, setMyCart] = useState([]);
  const [render, setRender] = useState(false);
  const cartQuantity = useSelector((state) => state.product.cartQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem("my_cart"));
  const my_cart = Array.isArray(cart) ? [...cart] : [];

  const handleRemoveProduct = (index) => {
    toast.warning(
      "Are you sure you want to remove Du lịch Panasonic? Click me",
      {
        onClick: () => {
          const arr = my_cart.filter((item, i) => {
            if (i <= index) {
              dispatch(setCartQuantityDecrement(item.quantity));
            }
            return i !== index;
          });

          localStorage.setItem("my_cart", JSON.stringify(arr));
        },
      }
    );
  };

  const handleOutCart = (path) => {
    navigate(path);
  };
  useEffect(() => {
    setMyCart(my_cart);
    return () => {
      setRender(false);
    };
  }, [cartQuantity, render]);
  let total = null;
  let totalPrice = null;
  let numberQuantity = null;
  return (
    <div>
      {myCart.length ? (
        <>
          {myCart.map(
            (
              {
                _id,
                name,
                brand,
                category,
                description,
                image,
                price,
                quantity,
                updatedAt,
                amount,
              },
              index
            ) => {
              total = quantity * price;
              totalPrice += total;
              numberQuantity = amount - quantity;

              return (
                <div id="single-cart-container" key={_id}>
                  <img src={image} alt="product image" />
                  <div id="details">
                    <span id="brand" style={{ color: "rgb(157, 23, 77)" }}>
                      {category}
                    </span>
                    <span id="title">{name}</span>
                    <p className="price">
                      <span style={{ color: "rgb(157, 23, 77)" }}>$</span>
                      {price}
                    </p>
                    <p>Còn lại: {numberQuantity}</p>
                  </div>
                  <div id="edit">
                    <div
                      id="minus"
                      style={{ color: "rgb(157, 23, 77)", cursor: "pointer" }}
                      onClick={() => {
                        if (quantity <= 1) {
                          toast.warning(
                            "Are you sure you want to remove Thể thao nước Zara? Click me",
                            {
                              onClick: () => {
                                const arr = my_cart.filter(({ _id: id }) => {
                                  setRender(true);
                                  return _id !== id;
                                });
                                localStorage.setItem(
                                  "my_cart",
                                  JSON.stringify(arr)
                                );
                                dispatch(setCartQuantityDecrement(1));
                              },
                            }
                          );

                          return;
                        } else {
                          const isIncrement = my_cart.filter(
                            ({ _id: id }) => id === _id
                          );
                          console.log(isIncrement);
                          if (isIncrement && cartQuantity > 0) {
                            my_cart[index].quantity -= 1;

                            localStorage.setItem(
                              "my_cart",
                              JSON.stringify(my_cart)
                            );
                            dispatch(setCartQuantityDecrement(1));
                          }
                        }
                      }}
                    >
                      -
                    </div>
                    <div id="quantity">{quantity}</div>
                    <div
                      id="plus"
                      style={{ color: "rgb(157, 23, 77)", cursor: "pointer" }}
                      onClick={() => {
                        const isIncrement = my_cart.filter(
                          ({ _id: id }) => id === _id
                        );

                        if (isIncrement && cartQuantity > 0) {
                          my_cart[index].quantity += 1;

                          localStorage.setItem(
                            "my_cart",
                            JSON.stringify(my_cart)
                          );
                          dispatch(setCartQuantityIncrement(1));
                        }
                      }}
                    >
                      +
                    </div>
                  </div>
                  <div id="price">
                    <span id="dolar-span">$</span>
                    <span id="price-span">{price}</span>
                    <span id="trash-icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                          handleRemoveProduct(index);
                        }}
                      >
                        <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
                      </svg>
                    </span>
                  </div>
                </div>
              );
            }
          )}

          <div id="total-price-div">
            <span id="left">Total Price: </span>
            <span id="dolar">$</span>
            <span id="right">{totalPrice.toLocaleString()}</span>
          </div>
          <div className=" row justify-content-center">
            <div className="col-8 row btn-group absolute">
              <button
                className="btn absolute col-4 btn-warning"
                onClick={() => {
                  handleOutCart("/product/1");
                }}
              >
                Go home
              </button>
              <button
                className="btn btn-success absolute col-8"
                onClick={() => {
                  localStorage.removeItem("my_cart");
                  dispatch(setCartQuantity(0));
                  toast.success("Thank you!");
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>Không có sản phẩm trong giỏ hàng</h1>
          <div id="zero-product-container">
            <h4>There is no product in your cart!</h4>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              version="1.1"
              viewBox="0 0 16 16"
              id="sad-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM4 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM10 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM4.998 12.199l-1.286-0.772c0.874-1.454 2.467-2.427 4.288-2.427s3.413 0.973 4.288 2.427l-1.286 0.772c-0.612-1.018-1.727-1.699-3.002-1.699s-2.389 0.681-3.002 1.699z" />
            </svg>
            <button
              style={{ margin: 12 }}
              onClick={() => {
                handleOutCart("/product/1");
                dispatch(setShowCart(false));
              }}
            >
              Go home
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
