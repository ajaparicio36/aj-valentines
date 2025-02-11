import Image from "next/image";
import React from "react";

const Yes = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Image src="/hooray.gif" alt="hooray" width={400} height={400} />
      <h1 className="shadow-md font-bold text-4xl">{"Yay! See you <3333"}</h1>
    </div>
  );
};

export default Yes;
