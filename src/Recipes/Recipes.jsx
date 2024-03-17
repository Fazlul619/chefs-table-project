import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
const Recipes = ({ handleAddToCookItem }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="grid grid-cols-2 gap-6">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe_id}
          recipe={recipe}
          handleAddToCookItem={handleAddToCookItem}
        ></Recipe>
      ))}
    </div>
  );
};

export default Recipes;
