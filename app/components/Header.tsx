import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="dark:bg-slate-800 p-5">
      <div className="flex justify-between  w-1/2 ">
        <Link className="bg-red-400 p-2 rounded-lg" href={"/"}>
          Home
        </Link>
        <Link className="bg-red-400 p-2 rounded-lg" href={"/counter"}>
          Counter
        </Link>
        <Link className="bg-red-400 p-2 rounded-lg" href={"/about"}>
          about
        </Link>
        <Link className="bg-red-400 p-2 rounded-lg" href={"/page-2"}>
          Page 2
        </Link>
      </div>
    </div>
  );
};
