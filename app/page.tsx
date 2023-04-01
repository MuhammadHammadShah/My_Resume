import React from "react";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { SocialIcons } from "./components/SocialIcons";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
export default function page() {
  return (
    <div>
      <SocialIcons />
      <Header />
      <Home />
      <About />
      <Portfolio />
      {/* <Skills /> */}
      <Contact />
    </div>
  );
}
