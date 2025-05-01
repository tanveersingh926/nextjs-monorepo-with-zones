import styles from "./page.module.css";

export default function Accounts() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Accounts - Main</h1>

        <ol>
          <li>
            We are in the Accounts Portal
          </li>
        </ol>

        <div className={styles.ctas}>
          <a href='/subscriptions'>Go to Subscriptions Portal</a>
        </div>
      </main>

    </div>
  );
}
