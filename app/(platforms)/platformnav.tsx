"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./platformnav.module.css";

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
    {
      href: "/k8s",
      label: "K8s",
    },
    {
      href: "/local",
      label: "Local",
    },
    {
      href: "/ansible",
      label: "Ansible",
    },
    {
      href: "/report",
      label: "Report",
    },
  ];
  return (
    <div className={styles.leftnav}>
      {links.map((link, idx) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            key={idx}
            href={link.href}
            className={`${
              isActive
                ? "font-extrabold bg-blue-500 text-zinc-100"
                : "text-blue-600 dark:text-blue-500"
            } font-medium text-center content-center m-auto w-full hover:underline ${
              styles.navlink
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default PlatformNav;
