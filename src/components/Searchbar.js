"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

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
      className="flex max-w-5xl mx-auto justify-between items-center px-4"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-10 rounded-sm placeholder-slate-100 outline-none bg-slate-500 flex-1"
      />
      <button className="bg-red-700 p-2 text-bold text-slate-100">Search</button>
    </form>
  );
};

export default Searchbar;
