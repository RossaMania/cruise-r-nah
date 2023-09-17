"use client";

import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 900) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behavior
         in place of 'smooth' */
    });
  };

    useEffect(() => {
      // Attach scroll event listener
      window.addEventListener("scroll", toggleVisible);

      // Cleanup function: detach the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", toggleVisible);
      };
    }, []);

  return (
    <button className="fixed w-full bottom-9 h-5 text-3xl z-1 cursor-pointer text-rose-500">
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </button>
  );
};

export default ScrollButton;
