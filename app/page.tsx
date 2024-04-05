import styles from "./page.module.css"

export const metadata = {
  title: "App Router",
};

export default function Page() {
    const authenticate = () => {
        console.log("hi");
    }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">App Router</h1>
        <form className={styles.center}>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    </div>
  );
}
