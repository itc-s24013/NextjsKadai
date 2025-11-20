import { MicroCMSImage } from "microcms-js-sdk";
import styles from "./index.module.css";
import Image from "next/image";

export default function MenuImage({ img }: { img?: MicroCMSImage }) {
  return (
    <div className={styles.img}>
      {img ? (
        <Image src={img.url} alt="" fill={true} className={styles.imgSetting} />
      ) : (
        <Image
          src="/no-img.png"
          alt=""
          fill={true}
          className={styles.imgSetting}
        />
      )}
    </div>
  );
}
