import styles from "./boost.module.css";
import Button from "../../components/button/Button";

const Boost = () => {
  const onClick = () => {
    alert("Another fake button");
  };

  return (
    <section className={styles.section}>
      <h3 className={styles.h3}>Boost your links today</h3>
      <Button onClick={onClick}>Get Started</Button>
    </section>
  );
};

export default Boost;
