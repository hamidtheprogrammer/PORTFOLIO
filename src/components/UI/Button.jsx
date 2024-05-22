import React from "react";

const Button = ({ name }) => {
  return (
    <button className="border-[1px] border-purple-400 px-4 py-2 rounded-lg mt-3 hover:bg-purple-400 hover:scale-[1.2] transition-[0.5s]">
      {name}
    </button>
  );
};

export default Button;
