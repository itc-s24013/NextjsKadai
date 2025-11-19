import styles from "./index.module.css";

export default function Header() {
  return (
    <section className={styles.top}>
      <h1 className={styles.title}>こもれび</h1>
      <h2 className={styles.description}>〜 あなただけの隠れ家 〜</h2>
    </section>
  );
}
