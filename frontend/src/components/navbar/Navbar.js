import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 w-100 mx-auto px-4 text-[white] bg-[#000300] ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
        <Link className=" hover:text-[crimson] text-[#00df9a]" to="/">
          Traffic Vision
        </Link>
      </h1>
      <ul className="hidden md:flex list-none">
        <Link to="/">
          <li className="p-4 text-[white] text-xl hover:text-[crimson] hover:font-semibold">
            Home
          </li>
        </Link>
        <Link to="/getstarted">
          <li className="p-4 text-[white] text-xl hover:text-[crimson]">Detect</li>
        </Link>
        <Link to="/about">
          <li className="p-4  text-[white] text-xl hover:text-[crimson]">About</li>
        </Link>
 

 
 
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 ss:w-[40%] sm:w-[40%] xs:w-[75%]  w-[50%]  h-full z-20 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          <Link className="text-[#00df9a]" to="/">
            Traffic Vision
          </Link>
        </h1>
        <Link to="/">
          <li className="p-4 text-[white] text-xl hover:text-[crimson] hover:font-semibold">
            Home
          </li>
        </Link>
        <Link to="/getstarted">
          <li className="p-4 text-[white] text-xl hover:text-[crimson]">Detect</li>
        </Link>
        <Link to="/about">
          <li className="p-4 text-[white] text-xl hover:text-[crimson]">About</li>
        </Link>
 
      </ul>
    </div>
  );
};

export default Navbar;
