import { CartNav } from "../../components";
import { useCart } from "../../components/context/cart-context";
import WishListCard from "../../components/WishListComponents/WishListCard/WishListCard";
import { empty_wishlist_image } from "../../assets";

export default function WishListPage() {
  const { cartState, cartDispatch } = useCart();
  const { wishlistProducts } = cartState;
  return (
    <>
      <CartNav />
      <div className="doc-wishlist flex_c">
        <h1>My Wishlist</h1>
        {wishlistProducts.length === 0 ? (
          <div className="empty_wishlist_img">
            <img src={empty_wishlist_image} alt="error" />
            <h2 className="wishlist-msg">Your wishlist is empty</h2>
          </div>
        ) : (
          <div className="wishlist-cards flex_r">
            {wishlistProducts.map((product) => {
              return <WishListCard product={product} key={product._id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}
