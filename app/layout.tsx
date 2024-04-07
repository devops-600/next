import "../styles/global.css";
import Image from "next/image";
import copyleft from "../public/copyleft.svg";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Hello</h1>
        </header>
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
