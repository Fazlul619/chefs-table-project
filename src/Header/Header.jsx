import img from "../assets/img/Rectangle 1.jpg";
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
          <div className="form-control ">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24   md:w-auto rounded-full"
            />
          </div>

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
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
    </div>
  );
};

export default Header;
