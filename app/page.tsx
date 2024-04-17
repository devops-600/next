"use client";
import { useState } from "react";
import styles from "./page.module.css";
// import Link from "next/link";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Operations Platform",
// };

export default function HomePage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleClickButton = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    router.push("/aws");
  };

  return (
    <div className={styles.index}>
      <h1 className="text-3xl font-bold mb-8">Operations Platform</h1>
      <div className={styles.center}>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email/Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          {/* <Link href="/aws"> */}
          <button type="submit" onClick={handleClickButton}>
            Login
          </button>
          {/* </Link> */}
          <br />
        </form>
      </div>
    </div>
  );
}
