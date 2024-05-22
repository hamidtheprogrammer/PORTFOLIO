import React from "react";
// import { Nav } from "./components/import.jsx";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

const App = () => {
  return (
    <section className="relative wrapper h-[100%] w-[100%]">
      <div className="bg absolute h-[100%] w-[100%]  top-0 left-0"></div>
      <Nav />
      <Hero />
    </section>
  );
};

export default App;
