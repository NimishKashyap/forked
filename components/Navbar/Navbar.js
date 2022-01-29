import React from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
function Navbar() {
  return (
    <nav className="flex justify-between w-full pt-1 shadow-md pb-2 fixed bg-white top-0 left-0 z-20">
      {/* Logo */}
      <Logo />
      {/* Navigation Items */}
      <NavItems />
    </nav>
  );
}

export default Navbar;
