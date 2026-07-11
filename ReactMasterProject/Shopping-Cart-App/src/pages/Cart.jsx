
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";


function Cart () {

    const { darkMode } = useContext(ThemeContext);
    const dispatch = useDispatch();

    const cartItems = useSelector(
  (state) => state.cart.cartItems
);

const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

if (cartItems.length === 0) {
  return (
    <div
      className={`min-h-screen flex justify-center items-center ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-4xl font-bold">
        🛒 Cart is Empty
      </h1>
    </div>
  );
}

function handleRemove (id) {

    dispatch(removeFromCart(id))
}


    return (
  <div
    className={`min-h-screen p-6 ${
      darkMode
        ? "bg-gray-900 text-white"
        : "bg-gray-100 text-black"
    }`}
  >
    <h1 className="text-4xl font-bold mb-8">
      Your Cart
    </h1>

    <div className="space-y-5">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-6"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-28 h-28 object-cover rounded-lg"
          />

          <div className="flex-1">
            <h2 className="text-xl font-bold text-black">
              {item.title}
            </h2>

            <p className="text-green-600 font-semibold">
              ${item.price}
            </p>

            <p className="text-black">
              Quantity: {item.quantity}
            </p>
          </div>

          <button
            onClick={() => handleRemove(item.id)}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
    </div>

    <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-black">
        Total: ${totalPrice.toFixed(2)}
      </h2>
    </div>
  </div>
);

}

export default Cart