import { Link } from "react-router-dom";
import Header from "./Header";

function Home() {
  return (
    <div className="bg-white">
      <Header />
      <div className="mx-auto max-w-2xl py-60 text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900">High Quality Products</h1>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500">The best in the industry. We are so good. Buy our stuff.</p>
        <div className="mt-10">
          <Link to="shop" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-sky-500 ">Shop Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
