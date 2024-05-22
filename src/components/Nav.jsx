import React from "react";
import { navItems } from "../constants";

const Nav = () => {
  return (
    <nav className="min-box-w flxCenter py-4 border-gray-500 bg-black border-[1px] w-[90vw] max-w-[500px] relative left-[50%] translate-x-[-50%] rounded-xl top-7 gap-5">
      {navItems.map((item) => (
        <li className="list-none cursor-pointer hover:text-purple-400">
          {item.name}
        </li>
      ))}
    </nav>
  );
};

export default Nav;
