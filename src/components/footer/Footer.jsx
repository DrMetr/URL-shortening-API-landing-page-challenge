import styles from "./footer.module.css";
import data from "../../data/footerMenu";
import links from "../../data/links";

const Footer = () => (
  <>
    <footer className={styles.footer}>
      <img
        src={process.env.PUBLIC_URL + "/public/images/logo_white.svg"}
        alt="Shortly"
        className={styles.img}
      />
      {data.map(({ title, items }) => (
        <div key={title} className={styles.wrapper}>
          <h4 className={styles.h4}>{title}</h4>
          <ul className={styles.ul}>
            {items.map((item) => (
              <li key={item} className={styles.li}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <ul className={styles.ulLinks}>
        {links.map((link) => (
          <li key={link.title} className={styles.li}>
            <a>
              <img src={process.env.PUBLIC_URL + link.image} alt={link.title} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
    <div className={styles.attribution}>
      Challenge by&nbsp;
      <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
      Coded by <a href="https://github.com/DrMetr">DrMetr</a>.
    </div>
  </>
);
export default Footer;
