import { useState } from "react";
import styles from "./navbarMobile.module.css";
import Button from "../button/Button";

const NavbarMobile = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const onClick = () => {
    showNavigation === false
      ? setShowNavigation(true)
      : setShowNavigation(false);
  };
  return (
    <div className={styles.wrapper}>
      <Button onClick={onClick} variant="blank">
        <img src="public/images/burger_menu.svg" className={styles.img} />
      </Button>
      {showNavigation === true && (
        <nav className={styles.nav}>
          <ul className={`${styles.ul} ${styles.sects}`}>
            <li className={styles.li}>
              <a href="#" className={styles.link}>
                <Button
                  onClick={onClick}
                  variant="blank"
                  className={styles.text}
                >
                  Features
                </Button>
              </a>
            </li>
            <li className={styles.li}>
              <a href="#" className={styles.link}>
                <Button
                  onClick={onClick}
                  variant="blank"
                  className={styles.text}
                >
                  Pricing
                </Button>
              </a>
            </li>
            <li className={styles.li}>
              <a href="#" className={styles.link}>
                <Button
                  onClick={onClick}
                  variant="blank"
                  className={styles.text}
                >
                  Resources
                </Button>
              </a>
            </li>
          </ul>
          <hr className={styles.hr} />
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Button onClick={onClick} variant="blank" className={styles.text}>
                Login
              </Button>
            </li>
            <li className={styles.li}>
              <Button
                onClick={onClick}
                variant="default"
                className={styles.signUp}
              >
                Sign Up
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavbarMobile;
