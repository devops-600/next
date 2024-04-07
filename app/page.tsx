"use client";
import styles from "./page.module.css";

// export const metadata = {
//   title: "Operations Platform",
// };

export default function Page() {
  const handleClick = (e: Event) => {
    console.log(e);
    alert("clicked login");
  };
  return (
    <div className={styles.index}>
      <h1 className="text-3xl font-bold mb-8">Operations Platform</h1>
      <div className={styles.center}>
        <form>
          <input type="email" name="email" placeholder="Email" required />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <br />
          <button type="submit" onClick={handleClick}>
            Login
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}
