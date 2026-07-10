import { Link, useSearchParams } from "react-router-dom";
import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";

function Navbar() {
  const { search, setSearch, setRecipes } = useContext(RecipeContext);
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  async function handleSearch() {
    try {

      setLoading(true)

      const response = await fetch(
        `https://forkify-api.jonas.io/api/v2/recipes?search=${search}`
      );

      const data = await response.json()

      if (data) {
        setLoading(false)
      }

      setRecipes(data.data.recipes);
    } 
    
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <h2 className="text-3xl font-bold text-orange-500">
          🍽️ Food Recipe
        </h2>

        {/* Search */}
        <div className="flex w-full md:w-auto gap-2">

          <input
            type="text"
            placeholder="Search Recipe..."
            value={search}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            onClick={handleSearch}
            className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            {loading ? "Loading..." : "Search"}
          </button>

        </div>

        {/* Navigation */}
        <nav className="flex gap-6 font-medium">

          <Link
            to="/"
            className="hover:text-orange-500 transition"
          >
            Home
          </Link>

          

          <Link
            to="/favorites"
            className="hover:text-orange-500 transition"
          >
            Favorites
          </Link>

        </nav>

      </div>

    </div>
  );
}

export default Navbar;