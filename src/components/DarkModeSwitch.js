"use client";

import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode onClick={() => setTheme("light")} />
        ) : (
          <BsFillMoonStarsFill onClick={() => setTheme("dark")} />
        ))}
    </div>
  );
};

export default DarkModeSwitch;
