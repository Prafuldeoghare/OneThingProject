import { useState } from "react";
import Faq from "./Sections/Faq";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";
import Second from "./Sections/Second";

function App() {
  return (
    <div className="w-screen h-auto">
      <Hero />
      <Second />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
