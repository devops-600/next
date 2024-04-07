import styles from "./page.module.css"

export const metadata = {
  title: "Operations Platform",
};

export default function Page() {
  return (
    <div className={styles.index}>
      <h1 className="text-3xl font-bold underline mb-4">Operations Platform</h1>
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
          <button type="submit">Login</button>
          <br />
        </form>
      </div>
    </div>
  );
}
