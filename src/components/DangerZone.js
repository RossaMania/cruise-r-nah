"use client";

import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

import { PiProhibitFill } from "react-icons/pi";


const DangerZone = () => {

  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl font-bold text-center p-2 text-rose-500">NOPE!</h1>
      <div className="text-9xl text-rose-500">
        <PiProhibitFill />
      </div>
      <div className="text-center">
        <h2 className="text-3xl p-2 text-rose-500">
          That search query has nothing to do with Tom Cruise!
        </h2>
        <h2 className="text-2xl font-bold p-2 text-rose-500">
          Please try again, or check out the Tomography!
        </h2>
        <div className="p-4">
          <Button
            text="Tomography"
            onClick={() => router.push("/tomography")}
          />
        </div>
      </div>
    </div>
  );
};

export default DangerZone;
