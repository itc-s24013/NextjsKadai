import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/image.png"
        alt="こもれびロゴ"
        width={1920}
        height={576}
        className={styles.bgImage}
      />
      <section className={styles.news}>
        <h1 className={styles.title}>こもれび</h1>
        <p className={styles.description}>あなただけの隠れ家</p>
      </section>
    </main>
  );
}
