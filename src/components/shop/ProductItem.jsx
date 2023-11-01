import React from "react";
import styled from "styled-components";

export const ProductItem = ({
  name,
  price,
  src,
  alt,
  id,
  onAddProduct,
  quantity,
  onDecreaseProduct,
  onRemoveHandler,
}) => {
  return (
    <>
      <ProductContainer>
        <ProductNum>{id}</ProductNum>
        <ProductImage src={src} alt={alt} />
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
        <ButtonsContainer>
          <Button onClick={() => onAddProduct(id)}>+</Button>
          <span>{quantity}</span>
          <Button onClick={() => onDecreaseProduct(id)}>-</Button>
          <ButtonRemove onClick={() => onRemoveHandler(id)}>
            Remove
          </ButtonRemove>
        </ButtonsContainer>
      </ProductContainer>
    </>
  );
};

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin: 20px;
  width: 100%;
  height: 65px;
  text-align: center;
  background-color: #ffffff;
`;

const ProductNum = styled.p`
  font-weight: 900;
`;

const ProductName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductPrice = styled.div`
  font-size: 16px;
`;

const ProductImage = styled.img`
  max-width: 60px;
  max-height: 60px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  width: 15px;
  height: 30px;
  background-color: blue;
  color: white;
  border: 1px solid;
  border-radius: 5px;
  transition-duration: 0.4s;
  font-size: 18px;
`;

const ButtonRemove = styled.button`
  width: 80px;
  height: 30px;
  background-color: red;
  color: white;
  border: 1px solid;
  border-radius: 5px;
  transition-duration: 0.4s;
  font-size: 17px;
`;
