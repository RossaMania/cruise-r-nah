import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import MenuItem from "./MenuItem";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { PiHouseBold } from "react-icons/pi";
import Link from "next/link";

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
      <div className="flex items-center space-x-5  mx-4 lg:mx-6">
        <DarkModeSwitch />
        {/* Logo */}
        <Link href="/">
          <h2 className="flex border-4 border-red-700 rounded-full bg-red-600 p-5 hover:border-4 hover:border-blue-500">
            <span className="font-bold text-white dark:font-bold dark:text-white text-center -rotate-45">
              Cruise
              <br />
              -r-
              <br />
              NAH!
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
