import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useSelector } from "react-redux";

function NavbarComponent() {

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (

    <nav
      className={`flex justify-between items-center px-8 py-4 shadow-md sticky top-0 z-50 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-800"
      }`}
    >

      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-orange-500"
      >
        🛒 ShopSmart
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">

        <Link
          to="/"
          className="hover:text-orange-500 transition font-medium"
        >
          Home
        </Link>

        <Link
          to="/cart"
          className="hover:text-orange-500 transition font-medium"
        >
          Cart ({totalItems})
        </Link>

        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            darkMode
              ? "bg-yellow-400 text-black hover:bg-yellow-300"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

      </div>

    </nav>
  );
}

export default NavbarComponent;