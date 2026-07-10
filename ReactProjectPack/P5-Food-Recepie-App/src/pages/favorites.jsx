import { useContext } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";

function Favorites() {

  const { fav,setFav } = useContext(RecipeContext);
  
  function removeFav(id) {
  setFav(
    fav.filter(
      item => item.id !== id
    )
  );
}

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-6xl mx-auto">

        <Link
          to="/"
          className="inline-block mb-6 text-orange-500 font-semibold hover:text-orange-600"
        >
          🏠 Back Home
        </Link>

        <h1 className="text-4xl font-bold text-center mb-10">
          ❤️ Favorite Recipes
        </h1>

        {fav.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <p className="text-gray-500 text-lg">
              No favorite recipes added yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {fav.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >

                <img
                  src={recipe.image_url}
                  alt={recipe.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">

                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {recipe.title}
                  </h3>

                  <p className="text-gray-500 mb-4">
                    {recipe.publisher}
                  </p>

                  <Link
                    to={`/recipe/${recipe.id}`}
                    className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                  >
                    View Recipe
                  </Link>

                  <button
                  onClick={() => removeFav(recipe.id)}
                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg ml-2"
                  >
                    🗑️ Remove
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Favorites;