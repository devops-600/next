"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PlatformNav = () => {
  const pathname = usePathname();

  const links = [
    {
      href: "/aws",
      label: "AWS",
    },
    {
      href: "/azure",
      label: "Azure",
    },
    {
      href: "/gcp",
      label: "GCP",
    },
  ];
  return (
    <div>
      {links.map((link, idx) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            key={idx}
            href={link.href}
            className={`${
              isActive ? "font-extrabold" : ""
            } mr-4 font-medium text-blue-600 dark:text-blue-500 hover:underline`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default PlatformNav;
