import styles from "../styles/Card.module.css";
import { CartContext } from "../contexts/CartContext.jsx";
import { useContext } from "react";

export default function Card({ product }) {
  const { cart, addToCart, removeFromCart, removeAllFromCart } = useContext(CartContext);

  let foundIndex = cart.findIndex((item) => {
    return item.product.id == product.id;
  });

  function addProduct() {
    addToCart(product);
  }

  function removeProduct() {
    removeFromCart(product);
  }

  function deleteProduct(){
    removeAllFromCart(product)
  }

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={product.image} alt="" />
      </div>
      <div className={styles.info}>
        <h2>{product.title}</h2>
        <span>${product.price}</span>
        <div className={styles.rating}>
          <span>{product.rating.rate}</span>
          <span className={styles.stars}>
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>
                {i < Math.round(product.rating.rate) ? "★" : "☆"}
              </span>
            ))}
          </span>
          <span>({product.rating.count})</span>
        </div>
        <div className={styles.buttons}>
        {foundIndex === -1 ? (
            <button onClick={addProduct} className={styles.addButton}>Add</button>
          ) : (
            <>
            <div className={styles.addRemoveButtons}>
              <button onClick={addProduct}>+</button>
              <input type="text" value={cart[foundIndex].quantity} disabled/>
              <button onClick={removeProduct}>-</button>
            </div>
            <button className={styles.deleteButton} onClick={deleteProduct}>T</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
