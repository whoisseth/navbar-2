/** @format */
"use client";

import Link from "next/link";
import React, { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import clsx from "clsx";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      labe: "Collections",
      link: "#"
    },
    {
      labe: "Men",
      link: "#"
    },
    {
      labe: "About",
      link: "#"
    },
    {
      labe: "Contact",
      link: "#"
    }
  ];

  return (
    <main>
      <nav className="flex justify-between px-8 items-center py-6   lg:px-24">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link href={"/"} className="text-4xl font-mono">
              logo
            </Link>
          </section>
          {navlinks.map((d, i) => (
            <Link key={i} className=" text-gray-400 hover:text-black" href={d.link}>
              {d.labe}
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold" href={d.link}>
                {d.labe}
              </Link>
            ))}
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4">
          {/* cart icon */}
          <AiOutlineShoppingCart className="text-3xl" />
          <Image
            width={40}
            height={40}
            className="h-8 w-8 rounded-full "
            src="https://i.pravatar.cc/150?img=52"
            alt="avatar-img"
          />
          {/* avtar img */}
        </section>
      </nav>
      <hr className=" lg:mx-24" />
    </main>
  );
}
