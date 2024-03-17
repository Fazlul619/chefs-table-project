import { useState } from "react";
import CookItem from "../CookItem/CookItem";

const CookItems = ({ cookItems }) => {
  const [prepare, setPrepare] = useState({});

  return (
    <div>
      <div className="card w-[514px] bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="font-semibold text-2xl text-center text-[#282828]">
            Want to cook:{cookItems.length}
          </h1>
          <hr />
          <div>
            <div className="flex text-[#878787] font-medium">
              <p>Name</p>
              <p>Time</p>
              <p>Calories</p>
            </div>
            <div>
              {cookItems.map((cookItem, index) => {
                const { recipe_id, recipe_name, preparing_time, calories } =
                  cookItem;
                console.log(prepare);
                const handelPrepare = () => {
                  setPrepare({
                    recipe_id,
                    recipe_name,
                    preparing_time,
                    calories,
                  });
                };
                return (
                  <CookItem
                    key={index}
                    cookItem={cookItem}
                    handelPrepare={handelPrepare}
                  ></CookItem>
                );
              })}
            </div>
          </div>
          <h1 className="font-semibold text-2xl text-center text-[#282828]">
            Currently cooking:{prepare.length}
          </h1>

          <hr />
          <div className="flex text-[#878787] font-medium">
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
          </div>
          <div className="flex text-[#878787] font-normal">
            <p>
              {prepare.recipe_id}
              {prepare.recipe_name}
            </p>
            <p>{prepare.preparing_time} minutes</p>
            <p>{prepare.calories} calories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookItems;
