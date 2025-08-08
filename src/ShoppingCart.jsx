import { useContext } from "react";
import { CartContext } from "./CartContext";

function ShoppingCart() {
  const { cartState } = useContext(CartContext);

  const cartList = cartState.map((item) => {
    return (
      <li key={item.id} className="px-2 py-1">
        Item {item.id}: {item.quantity}
      </li>
    );
  });
  return (
    <ul className="absolute right-0 z-5 mt-2 bg-white rounded-md min-w-60 ring-1 ring-gray ring-opacity-5 shadow-md">
      {cartState.length === 0 ? (
        <li className="px-2 py-1">Add items to cart!</li>
      ) : (
        cartList
      )}
    </ul>
  );
}

export default ShoppingCart;
