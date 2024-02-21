"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const linksData = [
  { link: "/register", title: "Register" },
  { link: "/login", title: "login" },
  { link: "/forget-password", title: "Forget Password" },
];

const ActiveLink = () => {
  const pathName = usePathname();

  return linksData.map((linkData) => {
    const isActive = pathName.startsWith(linkData.link);
    return (
      <Link
        key={linkData.title}
        href={linkData.link}
        className={isActive ? "font-semibold mr-4" : "text-blue-600 mr-4"}
      >
        {linkData.title}
      </Link>
    );
  });
};

export default ActiveLink;
