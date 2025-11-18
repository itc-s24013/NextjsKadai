import Image from "next/image";
import { getMenuList } from "./_libs/microcms";
import styles from "./page.module.css";

export default async function Page() {
  const data = await getMenuList();
  return (
    <main className={styles.main}>
      <section className={styles.top}>
        <h1 className={styles.title}>こもれび</h1>
        <h2 className={styles.description}>〜あなただけの隠れ家〜</h2>
        <Image
          src="/image.png"
          alt=""
          width={1920}
          height={576}
          className={styles.bgimg}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>Menu</h2>
        <ul>
          {data.contents.map((item) => (
            <li key={item.id} className={styles.list}>
              {item.image ? (
                <div className={styles.link}>
                  <Image
                    src={item.image?.url}
                    alt=""
                    width={256}
                    height={256}
                  />
                </div>
              ) : (
                <Image src="/no-img.png" alt="" width={256} height={256} />
              )}
              <dl className={styles.content}>
                <dt className={styles.name}>{item.name}</dt>
                <dt className={styles.meta}>
                  <span className={styles.tag}>
                    {item.taste && item.taste.length > 0 ? (
                      item.taste.map((taste) => (
                        <p key={taste.id}>{taste.flavor}</p>
                      ))
                    ) : (
                      <p>味の情報はありません</p>
                    )}
                  </span>
                  <span className={styles.tag}>
                    <p>{item.amount}円</p>
                  </span>
                </dt>
              </dl>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
