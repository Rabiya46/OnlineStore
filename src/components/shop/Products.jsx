import React from "react";
import styled from "styled-components";
import { ProductItem } from "./ProductItem";

export const Products = ({
  products,
  onAddProduct,
  onDecreaseProduct,
  onRemoveHandler,
}) => {
  return (
    <ProductsContainer>
      <Title>Товары в магазине:</Title>
      <MainContext>
        <h3>#</h3>
        <h3>Product</h3>
        <h3>ProductName</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Remove</h3>
      </MainContext>
      <div>
        {products.map((item) => {
          return (
            <ProductItem
              {...item}
              key={item.id}
              onAddProduct={onAddProduct}
              onDecreaseProduct={onDecreaseProduct}
              onRemoveHandler={onRemoveHandler}
            />
          );
        })}
      </div>
    </ProductsContainer>
  );
};

const ProductsContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
`;
const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const MainContext = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  color: white;
  margin-left: 50px;
`;
