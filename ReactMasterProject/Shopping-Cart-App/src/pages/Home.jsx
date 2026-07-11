import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";

function HomePage() {

  const { darkMode } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">
          Loading Products...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-red-500">
          {error}
        </h1>
      </div>
    );
  }

  return (

    <div
      className={`min-h-screen p-6 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >

      <h1 className="text-4xl font-bold text-center mb-10">
        🛍️ Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (

          <div
            key={product.id}
            className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 ${
              darkMode
                ? "bg-gray-800"
                : "bg-white"
            }`}
          >

            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">

              <h2 className="font-bold text-lg mb-2 line-clamp-2">
                {product.title}
              </h2>

              <p className="text-sm text-gray-500 mb-4">
                {product.brand}
              </p>

              <p className="text-2xl font-bold text-green-500 mb-4">
                ${product.price}
              </p>

              <button
                onClick={() =>
                  dispatch(addToCart(product))
                }
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
              >
                🛒 Add To Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default HomePage;