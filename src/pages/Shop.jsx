import { useContext, useState } from "react";
import { ProductsContext } from "../contexts/ProductsContext.jsx";
import CardContainer from "../components/CardContainer.jsx";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import styles from "../styles/Shop.module.css";

export default function Shop() {
  const { products } = useContext(ProductsContext);
  const [currentCategory, setCurrentCategory] = useState("All Categories");
  return (
    <div>
      <Navbar />
      <main>
        <Sidebar
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <CardContainer currentCategory={currentCategory} />
      </main>
    </div>
  );
}
