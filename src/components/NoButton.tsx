"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const NoButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Set initial position
    setPosition({
      x: window.innerWidth / 2 - 100,
      y: window.innerHeight / 2 + 250,
    });

    // Optional: Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHoverStart = () => {
    setPosition({
      x: Math.random() * (windowSize.width - 200),
      y: Math.random() * (windowSize.height - 100),
    });
  };

  return (
    <motion.div
      style={{ position: "absolute", left: position.x, top: position.y }}
      initial={false}
      onHoverStart={handleHoverStart}
    >
      <Button className="bg-red-700 hover:bg-red-400 hover:animate-bounce px-12 font-bold py-8 text-4xl text-white">
        <span>{"No </3"}</span>
      </Button>
    </motion.div>
  );
};

export default NoButton;
