
import { Link } from "react-router-dom";
import { useContext,useState } from "react";
import { RecipeContext } from "../context/RecipeContext";

function Home() {

  const { search, recipes } = useContext(RecipeContext);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h2 className="text-3xl font-bold text-center mb-2">
        Recipe Finder
      </h2>

      <p className="text-center text-gray-600 mb-8">
        Search Results for:
        <span className="font-semibold text-orange-500 ml-2">
          {search}
        </span>
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {recipes.map((r) => (
          <div
            key={r.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={r.image_url}
              alt={r.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-4">

              <h3 className="font-bold text-lg mb-2 line-clamp-2">
                {r.title}
              </h3>

              <p className="text-gray-500 text-sm mb-4">
                {r.publisher}
              </p>

              <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                
                <Link to={`/recipe/${r.id}`}>
                 View Recipe             
                </Link>
                
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Home;