"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  return (
    <form>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button>Search</button>
    </form>
  );
};

export default Searchbar;
