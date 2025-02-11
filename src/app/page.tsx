"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="flex flex-col gap-4 items-center">
      <Image
        src="/cat.gif"
        className="shadow-[#DE3163] shadow-md"
        alt="car"
        width={400}
        height={400}
      />
      <h1 className="shadow-md font-bold text-4xl">
        {"Will you be my valentine?"}
      </h1>
      <Link href={"/yes"}>
        <Button className="bg-[#DE3163] hover:bg-red-400 hover:animate-bounce px-12 font-bold py-8 text-4xl text-white">
          <span className="">{"Yes <3"}</span>
        </Button>
      </Link>
      <motion.div
        style={{ position: "absolute", left: position.x, top: position.y }}
        initial={{
          x: window.innerWidth / 2 - 100,
          y: window.innerHeight / 2 + 250,
        }}
        onHoverStart={() => {
          setPosition({
            x: Math.random() * (window.innerWidth - 200),
            y: Math.random() * (window.innerHeight - 100),
          });
        }}
      >
        <Button className="bg-red-700 hover:bg-red-400 hover:animate-bounce px-12 font-bold py-8 text-4xl text-white">
          <span className="">{"No </3"}</span>
        </Button>
      </motion.div>
    </div>
  );
};

export default Home;
