import Header from "./Header";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import ItemDetails from "./ItemDetails";
import { useParams } from "react-router-dom";

function Shop() {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const itemCards = items.map((item) => <ItemCard key={item.id} item={item} />);

  return (
    <>
      {!!id && <div className="fixed inset-0 bg-black opacity-50 z-20"></div>}
      <Header />
      <div className="m-6">
        <h1 className="text-3xl font-bold">Items</h1>
        <hr className="my-6" />
        {items.length === 0 ? (
          <h1 className="text-center text-3xl font-medium tracking-tight my-30">
            Loading Products...
          </h1>
        ) : (
          <div className="flex flex-wrap justify-center gap-3">{itemCards}</div>
        )}
      </div>
      {!!id && <ItemDetails item={items.length === 0 ? null : items[id - 1]} />}
    </>
  );
}

export default Shop;
