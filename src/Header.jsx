import { Handbag } from "lucide-react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "lucide-react";
import { CartContext } from "./CartContext";
import { useContext } from "react";

function Header() {
  const { cart } = useContext(CartContext)
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
        <ShoppingCartIcon className="h-5" />
        <p>{cart.length === 0 ? "0" : cart.length}</p>
      </nav>
    </header>
  );
}

export default Header;
