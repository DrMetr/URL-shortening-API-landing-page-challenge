import { Suspense } from "react";
import PLink from "./previousLink/PLink";
import styles from "./linkList.module.css";

const LinkList = ({ items }) => {
  return (
    <ul className={styles.ul}>
      {items.map((item) => (
        <li key={item.original} className={styles.li}>
          <Suspense fallback={<Loading />}>
            <PLink original={item.original} shortened={item.shortened} />
          </Suspense>
        </li>
      ))}
    </ul>
  );
};

const Loading = () => {
  return <span className={styles.fallback}>Shortening...</span>;
};

export default LinkList;
