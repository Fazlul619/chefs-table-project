import img from "../assets/img/Rectangle 1.jpg";
import icon from "../assets/icon/contarc icon.jpg";
import icon2 from "../assets/icon/search icon.jpg";
const Header = () => {
  return (
    <div>
      {/* nav bar */}
      <div className="navbar  mx-auto bg-base-100 flex justify-evenly">
        <p className="text-3xl text-[#150B2B] font-bold">Recipe Calories</p>

        <div className="text-xl flex gap-5 text-[#150B2BB3] font-medium">
          <h2>Home</h2>
          <h2>Recipes</h2>
          <h2>About</h2>
          <h2>Search</h2>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control relative ">
            <input
              type="text"
              className="input input-bordered w-fit    rounded-full"
            />
            <div className="flex absolute right-[60%] top-[30%]">
              <img src={icon2} alt="" />
              <p className="text-[#150B2BB3] font-semibold">Search</p>
            </div>
          </div>

          <div
            tabIndex={0}
            role="button"
            className="btn btn-success btn-circle avatar bg-[#0BE58A]"
          >
            <div className="w-10 rounded-full ">
              <img alt="Tailwind CSS Navbar component" src={icon} />
            </div>
          </div>
        </div>
      </div>
      {/* Banner */}
      <div className="relative">
        <div className="">
          <img className="mx-auto my-6 " src={img} alt="" />
        </div>
        <div className="max-w-fit h-fit p-4 mx-auto  absolute right-[27%] top-[20%] ">
          <h1 className="font-bold text-white text-center max-w-4xl text-5xl my-6">
            Discover an exceptional cooking class tailored for you!
          </h1>

          <p className=" max-w-4xl  text-center text-white">
            Like an artist wielding a brush, a chef crafts masterpieces from raw
            ingredients, infusing each dish with creativity and soul, turning
            ordinary moments into extraordinary memories.
          </p>
          <div className="text-center mt-6 ">
            <button className="btn btn-success rounded-l-full rounded-r-full w-36 p-2 font-semibold text-lg">
              Explore Now
            </button>
            <button className="btn btn-outline rounded-l-full rounded-r-full w-36 p-2 mx-5 text-white font-semibold text-lg">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
      {/* our recipe */}
      <div className="flex justify-center">
        <div>
          <h1 className="font-bold text-[#150B2B] text-center max-w-4xl text-4xl my-6">
            Our Recipes
          </h1>
          <p className="max-w-4xl  text-center text-[#150B2B99] font-medium">
            Recipes are the road maps to culinary adventures, guiding us through
            a journey of flavors, textures, and aromas, where every ingredient
            is a note and every dish a harmonious composition waiting to be
            savored.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
