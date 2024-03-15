const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 flex justify-evenly">
        <div className="">
          <a className="btn btn-ghost text-3xl text-[#150B2B]">
            Recipe Calories
          </a>
        </div>
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
    </div>
  );
};

export default Header;
