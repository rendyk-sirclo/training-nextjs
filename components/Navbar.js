import Link from "next/link";
import styles from "@styles/Navbar.module.css";

const Navbar = () => (
  <div className={styles.navbar}>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/avatar">
          <a>List Avatar</a>
        </Link>
      </li>
      <li>
        <Link href="/avatarapi">
          <a>List Avatar Using API</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
