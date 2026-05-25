import styles from "./navbar.module.css";
import NavbarDesktop from "../../components/navbar/NavbarDesktop";
import NavbarMobile from "../../components/navbar/NavbarMobile";
import { useState, useEffect } from "react";

function useWindowWidth() {
  // Initialize state with current window width
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Subscribe to resize event
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

const Navbar = () => {
  const width = useWindowWidth();
  return (
    <header className={styles.header}>
      <a href="#">
        <img
          src={process.env.PUBLIC_URL + "public/images/logo.svg"}
          alt="Shortly"
        />
      </a>
      {width > 1440 ? <NavbarDesktop /> : <NavbarMobile />}
    </header>
  );
};

export default Navbar;
