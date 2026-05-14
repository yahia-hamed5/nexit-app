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
  return<div>
    {
      links.map(el=><Link href={el}>{el}</Link>)
    }
  </div>;
}
