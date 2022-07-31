import { useCart } from "../../context/cart-context";
import { Link } from "react-router-dom";

export default function BillCard() {
  const { cartState, cartDispatch, cartPrice, setCartPrice } = useCart();
  const { cartProducts } = cartState;
  const cartTotal = cartProducts.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  setCartPrice(cartTotal)
  return (
    <div className="bill-card flex_c">
      <h3>PRICE DETAILS ({cartProducts.length} Items)</h3>
      <div className="bill-container flex_r">
        <p>Total MRP</p>
        <p>₹{cartPrice}</p>
      </div>
      <div className="bill-container flex_r">
        <p>Discount on MRP</p>
        <p>₹0</p>
      </div>
      <div className="bill-container border-bottom flex_r">
        <p>Convenience Fee</p>
        <p>₹0</p>
      </div>
      <div className="bill-container total-amount flex_r">
        <p>Total Amount</p>
        <p>₹{cartPrice}</p>
      </div>
      <Link to="/checkout">
        <button className="btn checkout primary-btn">Checkout</button>
      </Link>
    </div>
  );
}

export { BillCard };
