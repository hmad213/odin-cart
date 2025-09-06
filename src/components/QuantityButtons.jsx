import styles from "../styles/QuantityButtons.module.css";

export default function QunatityButtons({
  addProduct,
  removeProduct,
  quantity,
}) {
  return (
    <div className={styles.buttons}>
      <button onClick={addProduct}>+</button>
      <input type="text" value={quantity} disabled />
      <button onClick={removeProduct}>-</button>
    </div>
  );
}
