import styles from "../styles/Card.module.css";

export default function Card({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={product.image} alt="" />
      </div>
      <h2>{product.title}</h2>
      <span>${product.price}</span>
      <div className="rating">
        <span>{product.rating.rate}</span>
        <span className="stars">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>
              {i < Math.round(product.rating.rate) ? "★" : "☆"}
            </span>
          ))}
        </span>
        <span>({product.rating.count})</span>
      </div>
    </div>
  );
}
