import { useCart } from "../../context/cart-context"

export default function BillCard ({product}) {
    const {cartState, cartDispatch} = useCart();
    const {cartProducts} = cartState;
    const cartTotal = cartProducts.reduce(
        (prev,curr) => prev + curr.price*curr.quantity,0   
    )
    
    return (
        <div className="bill-card flex_c">
                <h3>PRICE DETAILS ({cartProducts.length} Items)</h3>
                <div className="bill-container flex_r">
                    <p>Total MRP</p>
                    <p>₹{cartTotal}</p>
                </div>
                <div className="bill-container flex_r">
                    <p>Discount on MRP</p>
                    <p>₹0</p>
                </div>
                <div className="bill-container flex_r">
                    <p>Coupon Discount</p>
                    <p id="apply-coupon">Apply Coupon</p>
                </div>
                <div className="bill-container border-bottom flex_r">
                    <p>Convenience Fee</p>
                    <p>₹0</p>
                </div>
                <div className="bill-container total-amount flex_r">
                    <p>Total Amount</p>
                    <p>₹{cartTotal}</p>
                </div>
                <a href="/Pages/Checkout/checkout.html"
                ><button className="btn checkout primary-btn">Checkout</button></a>
        </div>
    )
}

export {BillCard}