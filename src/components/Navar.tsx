"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./container";

function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/store",
      title: "Store",
    },
  ];

  return (
    <nav className="shadow p-4">
      <Container>
        {navLinks.map((item) => (
        <Link
          key={item.href}
          className={`mr-4 ${pathname === item.href ? "text-sky-500" : ""}`}
          href={item.href}
        >
          {item.title}
        </Link>
      ))}
      </Container>
    </nav>
  );
}

export default Navbar;
