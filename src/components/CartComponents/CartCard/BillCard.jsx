
export default function BillCard () {
    return (
        <div className="bill-card flex_c">
                <h3>PRICE DETAILS (2 Items)</h3>
                <div className="bill-container flex_r">
                    <p>Total MRP</p>
                    <p>₹6000</p>
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
                    <p>₹30</p>
                </div>
                <div className="bill-container total-amount flex_r">
                    <p>Total Amount</p>
                    <p>₹6030</p>
                </div>
                <a href="/Pages/Checkout/checkout.html"
                ><button className="btn checkout primary-btn">Checkout</button></a>
        </div>
    )
}

export {BillCard}