import React, { useEffect, useReducer } from "react";
import product_1 from "../../assets/images/product-1.png";
import product_2 from "../../assets/images/orange-removebg-preview.png";
import product_3 from "../../assets/images/kiwi-removebg-preview.png";
import { Products } from "./Products";
import ProductsCart from "./ProductsCart";
import { styled } from "styled-components";

const initProduct = () => {
  const local = localStorage.getItem("product");
  return local
    ? JSON.parse(local)
    : {
        products: [
          { id: 1, name: "Product 1", price: 1, src: product_1, quantity: 0 },
          { id: 2, name: "Product 2", price: 2, src: product_2, quantity: 0 },
          { id: 3, name: "Product 3", price: 3, src: product_3, quantity: 0 },
        ],
        cart: [],
        totalQuantity: 0,
      };
};

const productReduser = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const prodactToAdd = state.products.find((item) => {
        return item.id === action.payload;
      });
      if (prodactToAdd) {
        prodactToAdd.quantity += 1;
        const itemInCard = state.cart.find((item) => {
          return item.id === +prodactToAdd.id;
        });
        if (itemInCard) {
          itemInCard.quantity += 1;
          itemInCard.totalPrice = itemInCard.quantity * itemInCard.price;
        } else {
          state.cart.push({
            ...prodactToAdd,
            quantity: 1,
            totalPrice: prodactToAdd.price,
          });
        }
        state.totalQuantity += 1;

        return {
          ...state,
          cart: [...state.cart],
        };
      }
      console.log(prodactToAdd);
      break;

    case "REMOVE":
      const updatedCard = state.cart.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity > 1) {
            item.quantity -= 1;
            item.totalPrice = item.quantity * item.price;
          }
          if (state.totalQuantity > 0) {
            state.totalQuantity -= 1;
          }
        }
        return item;
      });
      const updatedProduct = state.products.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity > 1) {
            item.quantity -= 1;
            item.totalPrice = item.quantity * item.price;
          }
          if (state.totalQuantity > 0) {
            state.totalQuantity -= 1;
          }
        }
        return item;
      });
      // console.log(updatedProduct);

      return {
        ...state,
        cart: updatedCard,
        products: updatedProduct,
      };

    case "REMOVE_CLEAR":
      const removeCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      const removeProduct = state.products.map((item) =>
        item.id === action.payload ? { ...item, quantity: 0 } : { ...item }
      );
      return {
        ...state,
        cart: removeCart,
        products: removeProduct,
      };

    default:
      return state;
  }
};

const OnlineStoreContainer = () => {
  const [products, dispacht] = useReducer(productReduser, initProduct());

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(products));
  }, [products]);

  const addProductHandler = (id) => {
    dispacht({ type: "ADD_PRODUCT", payload: id });
  };

  const decreaceProductHandler = (id) => {
    dispacht({ type: "REMOVE", payload: id });
  };

  const remuoveProductHandler = (id) => {
    dispacht({ type: "REMOVE_CLEAR", payload: id });
  };

  const totalPrices = products.cart.reduce(
    (acc, current) => acc + current.totalPrice,
    0
  );

  // console.log(products);
  return (
    <>
      <ProductsCart cart={products.cart} />
      <Products
        products={products.products}
        onAddProduct={addProductHandler}
        onDecreaseProduct={decreaceProductHandler}
        onRemoveHandler={remuoveProductHandler}
      />
      <TotalPrice>Total price:{totalPrices} </TotalPrice>
    </>
  );
};

export default OnlineStoreContainer;

const TotalPrice = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
