import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Loginmenu from "./Head3";

const Header = () => {
  return (
      <div className="bg-light d-flex justify-content-center align-items-center header">
        <Logo />
        <Navbar />
        <Loginmenu />
    </div>
  );
};

export default Header;
