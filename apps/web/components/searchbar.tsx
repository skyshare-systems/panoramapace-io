"use client";
import React, { useState } from "react";
import SearchIcon from "./icons/search";
import { motion } from "framer-motion";

const variants = {
  open: {
    x: 0,
    opacity: 1,
    width: "100%",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    width: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`flex flex-row items-center justify-center ${isOpen ? "gap-1" : ""}  h-[44px]  rounded-xl border border-white-16 duration-200`}
    >
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className=" w-full h-full p-4"
      >
        <SearchIcon />
      </button>
      <motion.div animate={isOpen ? "open" : "closed"} variants={variants}>
        <input
          type="text"
          id="fname"
          name="fname"
          className="outline-none bg-transparent text-white-100"
        />
      </motion.div>
    </div>
  );
};

export default SearchBar;
