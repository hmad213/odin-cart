import styles from "../styles/Sidebar.module.css";

export default function Sidebar({ currentCategory, setCurrentCategory }) {
  let categories = [
    "All Categories",
    "Men's Clothing",
    "Jewelery",
    "Electronics",
    "Women's Clothing",
  ];

  function onClick(e) {
    setCurrentCategory(e.target.textContent);
  }

  return (
    <div className={styles.sidebar}>
      {categories.map((category, index) => {
        let buttonElement =
          category === currentCategory ? (
            <button className={styles.selected} onClick={onClick} key={index}>
              {category}
            </button>
          ) : (
            <button onClick={onClick} key={index}>
              {category}
            </button>
          );

        if (category != categories[categories.length - 1]) {
          return (
            <>
              {buttonElement}
              <hr />
            </>
          );
        } else {
          return buttonElement;
        }
      })}
    </div>
  );
}
