import React from "react";
import Button from "./UI/Button";

const Hero = () => {
  return (
    <section className="wrapper relative h-[100%] w-[100%]">
      <div className="relative top-[40%] flxCenter items-center flex-col gap-4 left-[50%] translate-x-[-50%] translate-y-[-50%] text-center leading-[1.4] max-w-[800px]">
        <div className="header_container overflow-hidden">
          <p className="text-sm text_shadow text-purple-400">
            DYNAMIC WEB DESIGN WITH REACTJS
          </p>
        </div>
        <div className="header_container overflow-hidden">
          <h1 className="header_text font-[600]">
            HI! I AM{" "}
            <span className="text-purple-400 text_shadow">OWOYEMI</span>{" "}
            ABDULHAMEED
          </h1>
        </div>
        <div className="header_container overflow-hidden">
          <p className="text-[0.65em] tracking-[0.2em] max-w-[500px]">
            A FRONTEND DEVELOPER FOCUSED ON CRAFTING ELEGANT AND EFFICIENT WEB
            FOR SEAMLESS USER EXPERIENCES
          </p>
        </div>
        <Button name={"EXPERTISE"} />
      </div>
    </section>
  );
};

export default Hero;
