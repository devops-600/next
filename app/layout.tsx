import "../styles/global.css";
import React from "react";
import Image from "next/image";
import copyleft from "../public/copyleft.svg";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Operations Platform",
  description: "Operations Platform for DevOps600",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="flex content-center text-center mx-auto">
          <div className={styles.flex}>
            <span className="mr-2">DevOps600</span>
            <Image
              className="mr-2"
              src={copyleft}
              alt="copyleft"
              width="20"
              height="20"
            ></Image>
            <span>Copyleft 2024</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
