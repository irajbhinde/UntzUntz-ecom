import { BillCard } from "../../components";
import { CartCard } from "../../components/CartComponents/CartCard/CartCard";
import CartNav from "../../components/CartComponents/cartNav/CartNav";
import "../../pages/cart/cartPage.css";
import { useCart } from "../../components/context/cart-context";
import { empty_cart_image } from "../../assets";

export default function CartPage() {
  const { cartState, cartDispatch } = useCart();
  const { cartProducts } = cartState;
  return (
    <>
      <CartNav />
      <h1 className="flex_r justify_center">Your Cart Items</h1>
      {cartProducts.length === 0 ? (
        <>
          <div className="flex_r empty-cart-box justify_center">
            <div className="flex_c empty_cart_img justify_center">
              <img src={empty_cart_image} alt="error" />
              <h2 className="flex_r cart-msg justify_center">Empty Cart</h2>
            </div>
          </div>
        </>
      ) : (
        <div class="doc-checkout flex_r">
          <>
            <div className="checkout-card flex_c">
              {cartProducts.map((product) => {
                return <CartCard product={product} key={product._id} />;
              })}
            </div>
            <BillCard />
          </>
        </div>
      )}
    </>
  );
}
