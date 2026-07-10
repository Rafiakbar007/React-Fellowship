

import { useState } from "react";
import { RecipeContext } from "../context/RecipeContext";

function RecipeProvider({ children }) {
  
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [fav, setFav] = useState([])

  return (
    <RecipeContext.Provider
      
    value={{
        search,
        setSearch,
        recipes,
        setRecipes,
        fav,
        setFav,
      }}
    >
      {children}

    </RecipeContext.Provider>
  );
}

export default RecipeProvider;