import { getMenuDetail } from "../_libs/microcms";
import styles from "../page.module.css";
import MenuImage from "../_components/MenuImage";

type Props = {
  params: {
    menu: string;
  };
};

export default async function Page(props: Props) {
  const data = await getMenuDetail(props.params.menu);

  return (
    <>
      <br />
      <div className="d-flex justify-content-center">
        <MenuImage img={data.image} />
      </div>
      <br />
      <dl>
        <dt>
          <h1>
            <strong>〜{data.name}〜</strong>
          </h1>
          <br />
        </dt>
        <dt className={styles.meta}>
          <span className={styles.tag}>
            {data.taste && data.taste.length > 0 ? (
              <>
                {data.taste.map((taste) => (
                  <h2 key={taste.id}>{taste.flavor}</h2>
                ))}
                <br />
              </>
            ) : (
              <>
                <h2>味の情報はありません</h2>
                <br />
              </>
            )}
          </span>
          <span className={styles.tag}>
            <h2>{data.amount}円</h2>
          </span>
        </dt>
        <br />
      </dl>
    </>
  );
}
