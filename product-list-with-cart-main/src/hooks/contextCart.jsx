import { createContext, useEffect, useState,useCallback } from "react";
import PropTypes from "prop-types";

export const CartItemsContext = createContext();

export function CartItemsProvider({ children }) {

  const getCartItem = useCallback(() => {
    const savedCartItem = localStorage.getItem("cartItem");
    return savedCartItem ? JSON.parse(savedCartItem) : [];
  }, []);

  const [cartItem, setCartItem] = useState(getCartItem);

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <CartItemsContext.Provider value={[cartItem, setCartItem]}>
      {children}
    </CartItemsContext.Provider>
  );
}

CartItemsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
