import "./confirm-order.css";
import { order_confirmed_image } from "../../assets";
import { PdNav } from "../../components";
import { useCart } from "../../components/context";
import { useNavigate } from "react-router-dom";

export default function ConfirmOrder() {
  const navigate = useNavigate();
  const { razorpayId } = useCart();
  return (
    <div className="confirmOrder-page-container">
      <PdNav />
      <div className="flex_r justify_center">
        <div className="flex_c confirm-img-and-orderId">
          <img src={order_confirmed_image} alt="error" />
          <h2
            style={{ color: "green" }}
            className="order-details flex_r justify_center"
          >
            Order Confirmed
          </h2>
          <h3 style={{ color: "green" }} className="flex_r justify_center">
            Order Id : {razorpayId}{" "}
          </h3>
          <div className="btn-container flex_r">
            <button
              onClick={() => {
                navigate("/home");
              }}
              className="btn-returnToHome "
            >
              Return To Home Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
