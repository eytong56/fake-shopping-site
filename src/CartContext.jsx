import { createContext, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "add": {
      if (state.some((item) => item.id === action.id)) {
        return state.map((item) => item.id === action.id ? {...item, quantity: Number(item.quantity) + Number(action.quantity)} : item)
      } else {
        return [...state, { id: action.id, quantity: action.quantity }];
      }
    }
    case "remove": {
      return state.filter((item) => item.id !== action.id);
    }
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, []);

  return <CartContext value={{ cartState, dispatch }}>{children}</CartContext>;
}

export { CartProvider, CartContext };
