import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import QunatityButtons from "../components/QuantityButtons";

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  function addProduct(product) {
    addToCart(product);
  }

  function removeProduct(product) {
    removeFromCart(product);
  }

  return (
    <div>
      <Navbar />
      <main>
        <Link>&lt; Continue Shopping</Link>
        <h2>Shopping Cart</h2>
        <div className="cart">
          <div className="columns">
            <h3>Product</h3>
            <h3>Quantity</h3>
            <h3>Price</h3>
            <h3>Total</h3>
          </div>
          <div className="cart-items">
            {cart.map((item, index) => {
              return (
                <div>
                  <img src={item.product.image} alt="" />
                  <h4>{item.product.title}</h4>
                  <QunatityButtons
                    addProduct={() => addProduct(item.product)}
                    removeProduct={() => removeProduct(item.product)}
                    quantity={item.quantity}
                  />
                  <span>${item.product.price}</span>
                  <span>${item.quantity * item.product.price}</span>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
