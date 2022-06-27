import Link from "next/link";
import styles from "@styles/Navbar.module.css";

const Navbar = () => (
  <nav className={styles.navbar}>
    <div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/avatar">
          <a style={{ marginLeft: "2rem" }}>List Avatar</a>
        </Link>
        <Link href="/avatarapi">
          <a style={{ marginLeft: "2rem" }}>List Avatar Using API</a>
        </Link>
        <Link href="/datafetch">
          <a style={{ marginLeft: "2rem" }}>Data Fetching</a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
