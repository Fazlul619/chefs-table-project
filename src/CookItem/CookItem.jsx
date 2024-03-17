import { useState } from "react";

const CookItem = ({ cookItem, handelPrepare }) => {
  const { recipe_id, recipe_name, preparing_time, calories } = cookItem;

  return (
    <>
      <div className="flex text-[#878787] font-normal">
        <p>
          {recipe_id}

          {recipe_name}
        </p>
        <p>{preparing_time} minutes</p>
        <p>{calories} calories</p>
        <button
          onClick={handelPrepare}
          className="btn btn-success rounded-l-full rounded-r-full w-28 h-12 p-4 font-semibold "
        >
          Preparing
        </button>
      </div>
    </>
  );
};

export default CookItem;
