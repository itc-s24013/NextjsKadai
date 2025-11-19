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
      <MenuImage img={data.image} />
      <dl>
        <dt>{data.name}</dt>
        <dt className={styles.meta}>
          <span className={styles.tag}>
            {data.taste && data.taste.length > 0 ? (
              data.taste.map((taste) => <p key={taste.id}>{taste.flavor}</p>)
            ) : (
              <p>味の情報はありません</p>
            )}
          </span>
          <span className={styles.tag}>
            <p>{data.amount}円</p>
          </span>
        </dt>
        <br />
      </dl>
    </>
  );
}
