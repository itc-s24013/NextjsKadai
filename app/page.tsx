import Image from "next/image";
import { getMenuList } from "./_libs/microcms";
import styles from "./page.module.css";

export default async function Page() {
  const data = await getMenuList();
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
        {data.contents.map((item) => (
          <Image
            key={item.id}
            src={item.image?.url}
            alt=""
            width={item.image?.width}
            height={item.image?.height}
          />
        ))}
      </section>
    </main>
  );
}
