import { useState } from "react";
import LinksWithIcons from "./LinksWithIcons";
import Rocket from "../../assets/rocket.png";
import Star from "../../assets/glowing-star.png";
import IdButton from "../../assets/id-button.png";
import Memo from "../../assets/memo.png";
import Order from "../../assets/package.png";
import Lock from "../../assets/locked.png";

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
            className="flex-grow px-2 text-xl border-none outline-none h-full md:w-auto"
          />
          <button type="submit" className="search_button">
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
      <div className={`md:flex ${menuOpen ? "block" : "hidden"} gap-3`}>
        <LinksWithIcons title="Home" link="/" emoji={Rocket} />
        <LinksWithIcons title="Products" link="/products" emoji={Star} />
        <LinksWithIcons title="Login" link="/login" emoji={IdButton} />
        <LinksWithIcons title="SignUp" link="/signup" emoji={Memo} />
        <LinksWithIcons title="My Orders" link="/my-orders" emoji={Order} />
        <LinksWithIcons title="Logout" link="/logout" emoji={Lock} />
        <a href="/cart" className="flex items-center">
          Cart{" "}
          <p className="flex justify-center font-normal w-5 h-5 rounded-full bg-[#6457f9] text-white text-base ml-1 items-center">
            0
          </p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
