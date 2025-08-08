import { createContext, useState } from "react";

const CartContext = createContext(null);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return <CartContext value={{ cart, setCart }}>{children}</CartContext>;
}

export { CartProvider, CartContext };
