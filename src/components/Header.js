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
          <h2 className="flex hover:border-4 border-fuchsia-600">
            <span className="font-bold text-white dark:font-bold dark:text-white bg-emerald-400 py-1 px-1">
              Cruise
            </span>
            <span className="font-bold text-white dark:font-bold dark:text-white bg-black p-0.5">
              -r-
            </span>
            <span className="font-bold text-white dark:font-bold dark:text-white bg-red-500 py-1 px-1">
              Nah
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
