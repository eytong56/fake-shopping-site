import { Handbag } from "lucide-react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "lucide-react";
import { CartContext } from "./CartContext";
import { useState, useContext } from "react";
import ShoppingCart from "./ShoppingCart";

function Header() {
  const { cartState } = useContext(CartContext);
  const [ showCart, setShowCart ] = useState(false);
  
  return (
    <header className="p-6 flex justify-between">
      <div className="">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold tracking-tight"
        >
          <span className="">Shop Central</span>
          <Handbag className="h-5" />
        </Link>
      </div>
      <nav className="flex justify-center items-center gap-8">
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
        <div className="relative inline-block">
          <div className="flex gap-2 items-center">
            <ShoppingCartIcon className="h-5 cursor-pointer" onClick={() => setShowCart(!showCart)}/>
            <p>{cartState.length === 0 ? "0" : cartState.length}</p>
          </div>
          {showCart && <ShoppingCart />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
