import { useState } from "react";
import CookItems from "./CookItems/CookItems";
import Header from "./Header/Header";
import Recipes from "./Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [cookItems, setCookItems] = useState([]);
  const [clickedRecipes, setClickedRecipes] = useState({});
  const handleAddToCookItem = (recipe) => {
    if (clickedRecipes[recipe.recipe_id]) {
      toast.error("Item is already added");
    } else {
      setClickedRecipes((prevState) => ({
        ...prevState,
        [recipe.recipe_id]: true,
      }));
      const newRecipe = [...cookItems, recipe];
      setCookItems(newRecipe);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="flex justify-center mt-6 gap-6">
        <Recipes handleAddToCookItem={handleAddToCookItem}></Recipes>
        <CookItems cookItems={cookItems}></CookItems>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
