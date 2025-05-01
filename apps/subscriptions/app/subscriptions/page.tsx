import Link from "next/link";
import styles from "./page.module.css";

export default function Subscriptions() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Accounts - Subscriptions</h1>

        <ol>
          <li>
            We are in the Subscriptions Portal
          </li>
        </ol>

        <div className={styles.ctas}>
          <Link href="/">Go to Accounts Portal</Link>
        </div>
      </main>

    </div>
  );
}
