import data from "../../data/advantages.js";
import styles from "./statistics.module.css";
import SCard from "../../components/statisticsCard/SCard.jsx";

const AdvancedStatistics = () => (
  <section className={styles.section}>
    <h2 className={styles.h2}>Advanced Statistics</h2>
    <p className={styles.p}>
      Track how your links are performing across the web with our advanced
      statistics dashboard.
    </p>
    <div className={styles.wrapper}>
      <div className={styles.thinLine}></div>
      {data.map((item) => (
        <SCard
          key={item.key}
          header={item.header}
          image={process.env.PUBLIC_URL + item.image}
          text={item.text}
          variant={item.key}
        />
      ))}
    </div>
  </section>
);

export default AdvancedStatistics;
