import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import MenuItem from "./MenuItem";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { PiHouseBold } from "react-icons/pi";

function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        {/* Menu */}
        <MenuItem title="HOME" address="/" Icon={PiHouseBold} />
        <MenuItem
          title="TOMOGRAPHY"
          address="/tomography"
          Icon={PiFilmSlateDuotone}
        />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        {/* Logo */}
      </div>
    </div>
  );
}

export default Header;
