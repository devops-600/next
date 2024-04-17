import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

// export const metadata = {
//   title: "Operations Platform",
// };

export default function HomePage() {
  // const [username, setUsername] = useState("");

  return (
    <div className={styles.index}>
      <h1 className="text-3xl font-bold mb-8">Operations Platform</h1>
      <div className={styles.center}>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email/Username"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <br />
          <Link href="/aws">
            <button type="submit">Login</button>
          </Link>
          <br />
        </form>
      </div>
    </div>
  );
}
