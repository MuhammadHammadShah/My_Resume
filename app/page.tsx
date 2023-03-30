import React from "react";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { SocialIcons } from "./components/SocialIcons";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
export default function page() {
  return (
    <div>
      <SocialIcons />
      <Header />
      <Home />
      <About />
      <Portfolio />
    </div>
  );
}
