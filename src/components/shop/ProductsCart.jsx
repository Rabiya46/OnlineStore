import React from "react";
import styled from "styled-components";

const ProductsCart = ({ cart }) => {
  return (
    <>
      {cart.length === 0 ? (
        ""
      ) : (
        <CartContainer>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <FruitsPhoto src={item.src} alt="" />
              <CartText>
                <p>{item.name}</p>
                <span>Price {item.totalPrice}$</span>
                <p>Quantity:{item.quantity}</p>
              </CartText>
              <CartButton>Added</CartButton>
            </CartItem>
          ))}
        </CartContainer>
      )}
    </>
  );
};

export default ProductsCart;

const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  text-align: center;
  margin: 20px;
`;

const CartItem = styled.div`
  background-color: #fff700;
  width: 170px;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
  }
  box-shadow: 0 12px 16px 0 rgba(0, 255, 251, 0.27),
    0 17px 50px 0 rgba(0, 255, 217, 0.39);
  border-radius: 1.25rem;
`;

const FruitsPhoto = styled.img`
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 50px;
`;

const CartText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: bold;
  border-radius: 1.25rem;
  overflow: hidden;
`;

const CartButton = styled.button`
  width: 110px;
  height: 28px;
  margin-top: 10px;
  background-color: blue;
  color: white;
  border: 1px solid;
  border-radius: 5px;
  transition-duration: 0.4s;
  font-size: 18px;
  &:hover {
    background-color: #14a719; /* Green */
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.27),
      0 17px 50px 0 rgba(0, 0, 0, 0.39);
  }
`;
