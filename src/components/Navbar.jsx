import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
        <h1>Shop</h1>
      </Link>
      <div>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/shop"}>
          <button>Products</button>
        </Link>
        <Link to={"/cart"}>
          <button>Cart</button>
        </Link>
      </div>
    </nav>
  );
}
