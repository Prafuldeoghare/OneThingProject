import { useState } from "react";
import CreditCard from "./Sections/CreditCard";
import Faq from "./Sections/Faq";
import Footer from "./Sections/Footer";
import Form from "./Sections/Form";
import Hero from "./Sections/Hero";
import Rewards from "./Sections/Rewards";
import Second from "./Sections/Second";

function App() {
  return (
    <div className="w-screen h-auto">
      <Hero />
      <Second />
      <Form />
      <Rewards />
      <CreditCard />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
