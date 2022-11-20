import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
      <div className="row bg-light">
        <Logo />
        <Navbar />
        <Searchbar />
      </div>
  );
};

export default Header;
