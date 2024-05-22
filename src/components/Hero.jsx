import React from "react";

const Hero = () => {
  return (
    <section className="wrapper relative h-[100%] w-[100%]">
      <div className="relative top-[40%] flxCenter items-center flex-col left-[50%] translate-x-[-50%] translate-y-[-50%] text-center leading-[1.4]">
        <p className="text-sm text_shadow text-purple-400">
          DYNAMIC WEB DESIGN WITH REACTJS
        </p>
        <h1 className="header_text">
          HI! I AM <span className="text-purple-400 text_shadow">OWOYEMI</span>{" "}
          ABDULHAMEED
        </h1>
        <p className="text-[0.65em] tracking-[0.2em]">
          A FRONTEND DEVELOPER FOCUSED ON CRAFTING ELEGANT AND EFFICIENT WEB FOR
          SEAMLESS USER EXPERIENCES
        </p>
      </div>
    </section>
  );
};

export default Hero;
