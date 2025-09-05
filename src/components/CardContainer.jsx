import { useContext } from "react";
import styles from "../styles/CardContainer.module.css";
import { ProductsContext } from "../contexts/ProductsContext";
import Card from "./Card";

export default function CardContainer({ currentCategory }) {
  const { products } = useContext(ProductsContext);

  const filteredProducts = products.filter((product) => {
    if (currentCategory === "All Categories") return true;

    return product.category == currentCategory.toLowerCase();
  });
  return (
    <div key={currentCategory} className={styles.cardContainer}>
      {filteredProducts.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
