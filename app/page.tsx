import React from "react";
import { Home } from "./components/Home";
import { Header } from "./components/Header";

export const page = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};
