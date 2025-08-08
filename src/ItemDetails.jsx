import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext"; 

function ItemDetails({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(CartContext);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handleCartAdd = () => {
    console.log(`Added ${quantity} of item ${item.id}`);
    setCart([...cart, { id: item.id, quantity: quantity }]);
    console.log(cart)
  };
  return createPortal(
    <div className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg border-1 border-gray-500 w-2/3 h-4/5 max-h-full p-12">
      <Link
        to="/shop"
        className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X />
      </Link>
      {!item ? (
        <h1 className="text-center text-3xl font-medium tracking-tight my-30">
          Loading Products...
        </h1>
      ) : (
        <div class="flex w-full h-full align-middle gap-12">
          <div className="p-6 flex align-middle flex-1">
            <img
              src={item.image}
              className="max-h-120 object-contain overflow-hidden"
            />
          </div>
          <div class="flex flex-col justify-center flex-1 min-w-60 gap-6">
            <h2 className="text-2xl w-full h-16 overflow-hidden text-gray-700 tracking-tight">
              {item.title}
            </h2>
            <p className="text-xs font-medium text-gray-400">
              {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
            </p>
            <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
            <p className="text-s tracking-tight w-full text-gray-500">
              {item.description}
            </p>
            <div className="flex items-center gap-3">
              <p className="">Quantity: </p>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-30 border-1 border-gray-300 rounded"
              />
              <button
                onClick={handleCartAdd}
                className="w-30 border-1 px-4 py-2 hover:bg-gray-200 transition-colors border-gray-300 shadow-xs rounded-2xl cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}

export default ItemDetails;
