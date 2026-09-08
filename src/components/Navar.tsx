"use client";

import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";
import Container from "./container";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import Cookies from "js-cookie";

function Navbar() {
  const pathname = usePathname();
  const{cartTotalQty}=useShoppingCartContext()

  const navLinks = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/store",
      title: "Store",
    },
    {
      href: "/dashboard",
      title: "Dashboard",
    },
    {
      href: "/login",
      title: "Login",
    },
  ];

  return (
    <nav className="shadow p-4">
      <Container>
        <div className="flex justify-between ">
          <div>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                className={`mr-4 ${pathname === item.href ? "text-sky-500" : ""}`}
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div>
            <span className="px-2 py-1 bg-red-500 text-white rounded-full">{cartTotalQty}</span>
            <Link href="/cart"> سبد خرید </Link>
            <button onClick={()=>{
              Cookies.remove("token")
              redirect('/')
            }} className="ml- text-red-600">Logout</button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
