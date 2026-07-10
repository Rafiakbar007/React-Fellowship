import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

function Details() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);

  const { fav, setFav } = useContext(RecipeContext);

  async function fetchRecipe() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://forkify-api.jonas.io/api/v2/recipes/${id}`
      );

      const data = await response.json();

      setRecipe(data.data.recipe);
    } 
    
    catch (error) {
      console.log(error);
    } 
    
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Recipe Not Found</h2>
      </div>
    );
  }

  const exists = fav.some(
    (item) => item.id === recipe.id
  );

  function handleFavorite() {
    if (exists) {
      setFav(
        fav.filter(
          (item) => item.id !== recipe.id
        )
      );
    } 
    
    else {
      setFav([...fav, recipe]);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="p-4 flex justify-between">
          <Link
            to="/"
            className="text-orange-500 font-semibold hover:text-orange-600"
          >
            🏠 Home
          </Link>

          <Link
            to="/favorites"
            className="text-red-500 font-semibold hover:text-red-600"
          >
            ❤️ View Favorites
          </Link>
        </div>

        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="w-full h-80 object-cover"
        />

        <div className="p-6">

          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            {recipe.title}
          </h1>

          <p className="text-lg text-gray-500 mb-6">
            By {recipe.publisher}
          </p>

          <button
            onClick={handleFavorite}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition duration-300 mb-8 ${
              exists
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {exists
              ? "🗑️ Remove from Favorites"
              : "❤️ Add To Favorites"}
          </button>

          <h2 className="text-2xl font-semibold mb-4">
            Ingredients
          </h2>

          <div className="space-y-3">
            {recipe.ingredients.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border rounded-lg p-3"
              >
                {item.description}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Details;