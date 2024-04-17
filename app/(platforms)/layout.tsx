"use client";
import PlatformNav from "./platformnav";
import styles from "./layout.module.css";
import React from "react";
import TopTime from "./toptime";
import { useRouter } from "next/navigation";

export default function PlatformsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [username, setUsername] = React.useState("");
  React.useEffect(() => {
    if (!localStorage.getItem("username")) {
      router.replace("/");
    }
    setUsername(localStorage.getItem("username") || "");
  }, []);
  return (
    <>
      <div className="flex">
        <div className="p-4 text-3xl mr-4">
          Hello {username ? username : "Stranger"}
        </div>
        <TopTime />
      </div>

      <div className={styles.layout}>
        <PlatformNav />
        <section className={styles.content}>{children}</section>
      </div>
    </>
  );
}
