"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [links, setLinks] = useState([
    "about-us",
    "products",
    "cart",
    "login",
    "register",
  ]);
  return (
    <header className="bg-white py-5 border-b-1">
      <div className="container mx-auto">
        <div className="w-full flex justify-between items-center">
          <div className="Loog text-3xl font-bold ">YAHIA</div>
          <nav className="flex flex-row gap-4 items-center justify-center ">
            {links.map((el, i) => (
              <Link className="hover:text-blue-500 text-xl font-bold" key={i} href={el}>
                {el}
              </Link>
            ))}
          </nav>
          <div className="btn flex gap-2 justify-center items-center text-2xl ">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </div>
    </header>
  );
}
