import { CartNav } from "../../components";
import { useCart } from "../../components/context/cart-context";
import WishListCard from "../../components/WishListComponents/WishListCard/WishListCard";

export default function WishListPage() {
    const {cartState, cartDispatch} = useCart();
    const {wishlistProducts} = cartState;
    return (
        <><CartNav /><div class="doc-wishlist flex_c">
            <h1>My Wishlist</h1>
            <div class="wishlist-cards flex_r">
                {wishlistProducts.map((product) => {
                    return <WishListCard product={product} key={product._id} />;
                })}
            </div>
        </div></>
    )
}