import Image from "next/image";
import { getMenuList } from "./_libs/microcms";
import styles from "./page.module.css";

export default async function Page() {
  const data = await getMenuList();
  return (
    <div>
      <h2>〜 Menu 〜</h2>
      <br />
      <ul className="row">
        {data.contents.map((item) => (
          <>
            <li key={item.id} className="col-3">
              <div className="card">
                {item.image ? (
                  <div className={styles.link}>
                    <Image
                      src={item.image?.url}
                      className="card-img-top"
                      alt=""
                      width={256}
                      height={256}
                    />
                  </div>
                ) : (
                  <Image
                    src="/no-img.png"
                    className="card-img-top"
                    alt=""
                    width={256}
                    height={256}
                  />
                )}
                <dl className="card-body">
                  <dt className="card-title">{item.name}</dt>
                  <dt className={styles.meta}>
                    <span className={styles.tag}>
                      {item.taste && item.taste.length > 0 ? (
                        item.taste.map((taste) => (
                          <p key={taste.id} className="card-text">
                            {taste.flavor}
                          </p>
                        ))
                      ) : (
                        <p className="card-text">味の情報はありません</p>
                      )}
                    </span>
                    <span className={styles.tag}>
                      <p className="card-text">{item.amount}円</p>
                    </span>
                  </dt>
                  <br />
                  <a
                    href={`./${item.id}`}
                    className="btn btn-outline-secondary"
                  >
                    Go somewhere
                  </a>
                </dl>
              </div>
              <br />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
