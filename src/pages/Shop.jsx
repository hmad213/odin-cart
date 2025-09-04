import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext.jsx";
import Navbar from "../components/Navbar.jsx"

function Product({ data }) {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <h3>{data.price}</h3>
    </div>
  );
}

export default function Shop() {
  const { products } = useContext(ProductsContext);
  return <div>
    <Navbar/>
    {products.map((product) => <Product data={product} />)}
  </div>;
}
