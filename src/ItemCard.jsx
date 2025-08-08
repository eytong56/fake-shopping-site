import { Link } from "react-router-dom";

function ItemCard({ item }) {
  return (
    <Link to={`/shop/${item.id}`}>
      <div className="rounded-lg border-1 border-gray-400 shadow-sm min-w-xs flex-1 p-6 hover:shadow-lg">
        <img
          src={item.image}
          alt={item.title}
          className="object-contain w-60 h-60 mx-auto overflow-hidden mb-6"
        />
        <h2 className="text-lg w-60 h-16 hover:underline overflow-hidden text-gray-700 tracking-tight">
          {item.title.length < 45
            ? item.title
            : item.title.slice(0, 45) + "..."}
        </h2>
        <p className="text-xs font-medium text-gray-400 mb-6">
          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
        </p>
        <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

export default ItemCard;
