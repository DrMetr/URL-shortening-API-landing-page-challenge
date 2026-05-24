import styles from "./hero.module.css";
import Button from "../../components/button/Button";

const Hero = () => {
  const onClick = () => {
    alert(
      "Pretend there's a product to purchase and you see a page with a form to fill in",
    );
  };
  return (
    <section className={styles.section}>
      <img
        src="/public/images/illustration-working.svg"
        alt="working"
        className={styles.img}
      />
      <div className={styles.wrapper}>
        <h1>
          {/* prettier-ignore */}
          <pre className={styles.h1}>
{
`More than just
shorter links`
}
  </pre>
        </h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button onClick={onClick}>Get Started</Button>
      </div>
    </section>
  );
};

export default Hero;
