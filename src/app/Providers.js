"use client";

import { ThemeProvider } from "next-themes"

import React from "react";

const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-gray-700 dark:text-red-200 text-gray-700 bg-slate-50 transition-colors duration-300 min-h-screen select-none">{children}</div>
    </ThemeProvider>
  );
};

export default Providers;
