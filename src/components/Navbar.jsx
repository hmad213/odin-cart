import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((prev, item) => {
    return prev + item.quantity;
  }, 0);

  return (
    <>
    <nav className={styles.navbar}>
      <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
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
          <button>Cart {total}</button>
        </Link>
      </div>
    </nav>
    <hr className={styles.hr}/>
    </>
  );
}
