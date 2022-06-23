import { StyledLink } from "../Navbar/Navbar.styled";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.copyright}>
          <h2 className={styles.navbar__brand}>Covid App</h2>
          <h4 className={styles.by}>Copyright by Yazid</h4>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}><StyledLink to="/">Global</StyledLink></li>
            <li className={styles.navbar__item}><StyledLink to="/covid/indonesia">Indonesia</StyledLink></li>
            <li className={styles.navbar__item}><StyledLink to="/covid/provinsi">Provinsi</StyledLink></li>
            <li className={styles.navbar__item}><StyledLink to="">About</StyledLink></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
