import NoButton from "@/components/NoButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
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
      <NoButton />
    </div>
  );
};

export default Home;
