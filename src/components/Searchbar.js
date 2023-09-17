"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "./Button";

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);

    if (!search) return;

    router.push(`/search/${search}`);

    setSearch("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-5xl mx-auto justify-between items-center px-5"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search by title..."
        className="w-full h-10 rounded-sm placeholder-slate-100 outline-none bg-slate-500 flex-1 p-2 text-red-200"
      />
      <Button text="Search" />
    </form>
  );
};

export default Searchbar;
