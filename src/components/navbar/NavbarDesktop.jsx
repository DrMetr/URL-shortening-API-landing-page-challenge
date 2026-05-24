import styles from "./navbarDesktop.module.css";
import Button from "../button/Button";

const NavbarDesktop = () => {
  const onClick = () => {
    alert("Whoopsie! Nothing here too!");
  };
  return (
    <nav className={styles.nav}>
      <ul className={`${styles.ul} ${styles.sects}`}>
        <li className={styles.li}>
          <a href="#" className={styles.link}>
            <Button onClick={onClick} variant="blank">
              Features
            </Button>
          </a>
        </li>
        <li className={styles.li}>
          <a href="#" className={styles.link}>
            <Button onClick={onClick} variant="blank">
              Pricing
            </Button>
          </a>
        </li>
        <li className={styles.li}>
          <a href="#" className={styles.link}>
            <Button onClick={onClick} variant="blank">
              Resources
            </Button>
          </a>
        </li>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Button onClick={onClick} variant="blank">
            Login
          </Button>
        </li>
        <li className={styles.li}>
          <Button onClick={onClick} variant="default">
            Sign Up
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
