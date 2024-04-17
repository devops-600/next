"use client";
import "../styles/global.css";
import React from "react";
import Image from "next/image";
import copyleft from "../public/copyleft.svg";
import styles from "./layout.module.css";
import PlatformNav from "./platformnav";

// export const metadata: Metadata = {
//   title: "Operations Platform",
//   description: "Operations Platform for DevOps600",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = React.useState(false);
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    setIsClient(true);

    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <html lang="en">
      <body>
        <header>Hello, it's {isClient && time.toLocaleTimeString()} now</header>
        <PlatformNav />
        {children}
        <footer>
          <h2 className={styles.flex}>
            DevOps600
            <Image src={copyleft} alt="copyleft" width="20" height="20"></Image>
            &nbsp;&nbsp;Copyleft 2024
          </h2>
        </footer>
      </body>
    </html>
  );
}
