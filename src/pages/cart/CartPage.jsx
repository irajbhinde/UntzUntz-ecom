import { BillCard } from "../../components";
import { CartCard } from "../../components/CartComponents/CartCard/CartCard";
import CartNav from "../../components/CartComponents/cartNav/CartNav";
import "../../pages/cart/cartPage.css";
import { useCart } from "../../components/context/cart-context";

export default function CartPage() {
  const { cartState, cartDispatch } = useCart();
  const { cartProducts } = cartState;
  return (
    <>
      <CartNav />
      <div class="doc-checkout flex_r">
        <div className="checkout-card flex_c">
          {cartProducts.map((product) => {
            return <CartCard product={product} key={product._id} />;
          })}
        </div>
        <BillCard />
      </div>
    </>
  );
}
