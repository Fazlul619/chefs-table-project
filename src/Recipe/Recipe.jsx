import timeIcon from "../assets/icon/time.jpg";
import fireIcon from "../assets/icon/fire icon.jpg";
const Recipe = ({ recipe }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="w-80 h-52 px-6 pt-6">
        <img className="rounded-xl" src={recipe_image} alt="" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <p className="text-[#878787] font-normal">{short_description}</p>
        <hr />
      </div>
      <div className="card-body">
        <h1 className="text-xl font-semibold">
          Ingredients:{ingredients.length}
        </h1>

        {ingredients.map((ingredients) => (
          <span>
            <li className="text-[#878787] font-normal">{ingredients}</li>
          </span>
        ))}
        <hr />
      </div>

      <div className="card-body flex justify-between flex-row">
        <div className="flex gap-1">
          <img src={timeIcon} alt="" />
          <p>{preparing_time} minutes</p>
        </div>
        <div className="flex gap-1">
          <img src={fireIcon} alt="" />
          <p>{calories} calories</p>
        </div>
      </div>
      <div className="card-body">
        <button className="btn btn-success rounded-l-full rounded-r-full w-36 p-2 font-semibold text-lg">
          Want to Cook
        </button>
      </div>
    </div>
  );
};

export default Recipe;
