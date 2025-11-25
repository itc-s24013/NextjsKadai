import Image from "next/image";
import { Menu } from "../../_libs/microcms";
import styles from "./index.module.css";
import Search from "../Search";

type Props = {
  menu: Menu[];
};

export default async function MenuList({ menu }: Props) {
  const data = menu;
  return (
    <div>
      <h2>〜 Menu 〜</h2>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <Search />
        </div>
        <div className="col-2"></div>
      </div>
      <br />
      <ul className="row">
        {data.map((item) => (
          <>
            <li key={item.id} className="col-3">
              <div className={"card " + styles["hover-card"]}>
                <a href={`./${item.id}`}>
                  {item.image ? (
                    <Image
                      src={item.image?.url}
                      className="card-img-top"
                      alt=""
                      width={256}
                      height={256}
                    />
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
                    <dt>
                      <span className={styles.flavor}>
                        {item.taste && item.taste.length > 0 ? (
                          item.taste.map((taste) => (
                            <span key={taste.id} className="card-text">
                              {taste.flavor}
                            </span>
                          ))
                        ) : (
                          <p className="card-text">味の情報はありません</p>
                        )}
                      </span>
                      <span>
                        <p className="card-text">{item.amount}円</p>
                      </span>
                    </dt>
                  </dl>
                </a>
              </div>
              <br />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
