import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav_bar">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-3xl md:text-4xl mr-2 md:mr-5">CartWish</h1>
        <form className="flex h-10 border border-solid border-[#cdcdcd] rounded-md p-1 mt-2 md:mt-0">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-2 text-xl border-none outline-none h-full w-full md:w-auto"
          />
          <button
            type="submit"
            className="h-full px-2 text-xl border-none bg-[#6457f9] text-white rounded-md cursor-pointer"
          >
            Search
          </button>
        </form>
        <button
          className="md:hidden block text-3xl ml-4 text-[#6457f9] cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      <div className={`md:flex ${menuOpen ? "block" : "hidden"}`}>
        <p className="md:mr-4 mt-4 md:mt-2">Item 1</p>
        <p className="md:mr-4 mt-4 md:mt-2">Item 2</p>
        <p className="mt-4 md:mt-2">Item 3</p>
      </div>
    </nav>
  );
};

export default Navbar;
