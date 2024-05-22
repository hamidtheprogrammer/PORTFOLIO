import React, { useEffect } from "react";

import { navItems } from "../constants";

const Nav = () => {
  useEffect(() => {
    const navContainer = document.querySelector(`.nav_container`);
    navContainer.classList.add(`active`);
  }, []);
  return (
    <div className="nav_container  overflow-hidden relative left-[50%] translate-x-[-50%] top-7 flxCenter  ">
      <nav className="min-box-w flxCenter py-4 border-gray-500 bg-black border-[1px] w-[90vw] max-w-[500px] translate-x-[-100%}] rounded-xl gap-5">
        {navItems.map((item) => (
          <li className="list-none cursor-pointer hover:text-purple-400">
            {item.name}
          </li>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
