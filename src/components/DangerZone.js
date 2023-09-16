"use client";

import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";


const DangerZone = () => {

  const router = useRouter();

  return (
    <div>
      <h1>NOPE!</h1>
      <div>{/* Prohibit react icon goes here. */}</div>
      <div>
        <h2>That search query has nothing to do with Tom Cruise!</h2>
        <h2>Please try again, or check out the Tomography!</h2>
        <Button text="Tomography" onClick={() => router.push("/tomography")} />
      </div>
    </div>
  );
};

export default DangerZone;
