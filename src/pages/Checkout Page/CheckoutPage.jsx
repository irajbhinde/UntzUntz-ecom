import { BillCard } from "../../components";
import CartNav from "../../components/CartComponents/cartNav/CartNav";
import { useCart } from "../../components/context";
import "./checkout-page.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cartState, cartDispatch, razorpayId, setRazorpayId, cartPrice } =
    useCart();
  const { userAddress, cartProducts } = cartState;
  const [addNewAddress, setAddNewAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(false);
  const initialState = {
    userName: "",
    phoneNumber: "",
    addressLineOne: "",
    addressLineTwo: "",
    pincode: "",
    city: "",
    town: "",
    state: "",
  };
  const [userDetails, setUserDetails] = useState(initialState);

  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  const loadRazorPayScript = async () => {
    return new Promise((resolve) => {
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const navigateToRazorPayGateway = async () => {
    const response = await loadRazorPayScript();
    if (!response) {
      alert("Faile to load Razorpay Script");
    }
    const options = {
      key: "rzp_test_bbW33TmJKfuIdq",
      amount: cartPrice * 100,
      currency: "INR",
      name: "Untz Untz- The Music Store",
      description: "Thank you for shopping with us!",
      image:
        "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",
      handler: function (response) {
        console.log("razorpay rest", response);
        const { razorpay_payment_id } = response;
        setRazorpayId(razorpay_payment_id);
        document.body.removeChild(script);
        setTimeout(() => {
          navigate("/confirmationPage");
          cartDispatch({ type: "CLEAR_CART" });
        }, 1500);
      },
      prefill: {
        name: "Raj",
        email: "rajbhinde1@gmail.com",
        contact: "8767212313",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  // const formik = useFormik({
  //   initialValues: {
  //     userName: "",
  //     phoneNumber: "",
  //     addressLineOne: "",
  //     addressLineTwo: "",
  //     pincode: "",
  //     city: "",
  //     town: "",
  //     state: "",
  //   },

  //   onSubmit: (values, { resetForm }) => {
  //     cartDispatch({ type: "ADD_ADDRESS", payload: values });
  //     resetForm();
  //   },
  // });

  return (
    <>
      <CartNav />
      <div className="checkoutPage-container flex_c">
        <h1 className="flex_r justify_center">Checkout</h1>
        <div className="addr-bill-container flex_r">
          <div className="address-container flex_c">
            <h3 className="addr-container-header">Delivery Address</h3>
            {userAddress.map((address) => {
              return (
                <div key={address._id} className="addr-details flex_c">
                  <span className="name_number flex_r">
                    <input
                      id="guest-user"
                      onChange={() => {
                        setAddNewAddress(false);
                        setSelectedAddress(address);
                      }}
                      name="user-address"
                      type="radio"
                    />
                    <b htmlFor="guest-user">{address.userName}</b>
                    <b>{address.phoneNumber}</b>
                  </span>
                  <span className="flat_details flex_c">
                    <p>{address.addressLineOne}</p>
                    <p>{address.addressLineTwo}</p>
                    <p>
                      {address.town}-{address.pincode}, {address.city},{" "}
                      {address.state}{" "}
                    </p>
                  </span>
                </div>
              );
            })}

            <div className="add-new-address flex_c">
              <span className="span-addNew-addr flex_r">
                <input
                  id="add-new-address"
                  onChange={() => {
                    setSelectedAddress(false);
                    setAddNewAddress(true);
                  }}
                  name="user-address"
                  type="radio"
                />
                <p>Add New Address</p>
              </span>
              {addNewAddress ? (
                <>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      cartDispatch({
                        type: "ADD_ADDRESS",
                        payload: userDetails,
                      });
                      setUserDetails(initialState);
                    }}
                    className="addr-form-container flex_c"
                  >
                    <div className="addr-input-container flex_r">
                      <input
                        placeholder="Name*"
                        id="userName"
                        type="text"
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            userName: e.target.value,
                          })
                        }
                        value={userDetails.userName}
                      />
                      <input
                        placeholder="Mobile Number*"
                        id="phoneNumber"
                        type="number"
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            phoneNumber: e.target.value,
                          })
                        }
                        value={userDetails.phoneNumber}
                      />
                    </div>
                    <div className="addr-input-container flex_r">
                      <input
                        placeholder="Pincode*"
                        id="pincode"
                        type="number"
                        maxLength={6}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            pincode: e.target.value,
                          })
                        }
                        value={userDetails.pincode}
                      />
                      <input
                        placeholder="City*"
                        id="city"
                        type="text"
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            city: e.target.value,
                          })
                        }
                        value={userDetails.city}
                      />
                    </div>
                    <div className="addr-input-container flex_r">
                      <input
                        placeholder="Town*"
                        id="town"
                        type="text"
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            town: e.target.value,
                          })
                        }
                        value={userDetails.town}
                      />
                      <input
                        placeholder="State*"
                        id="state"
                        type="text"
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            state: e.target.value,
                          })
                        }
                        value={userDetails.state}
                      />
                    </div>
                    <input
                      placeholder="Address Line One*"
                      id="addressLineOne"
                      type="text"
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          addressLineOne: e.target.value,
                        })
                      }
                      value={userDetails.addressLineOne}
                    />
                    <input
                      placeholder="Address Line Two"
                      id="addressLineTwo"
                      type="text"
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          addressLineTwo: e.target.value,
                        })
                      }
                      value={userDetails.addressLineTwo}
                    />

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setUserDetails({
                          userName: "Raj Bhinde",
                          phoneNumber: "9814148211",
                          addressLineOne: "Kalp Nagri, BR Road",
                          addressLineTwo: "Opp. Achija Hotel, Mulund West",
                          pincode: "400080",
                          city: "Mumbai",
                          town: "Mulund",
                          state: "Maharashtra",
                        });
                      }}
                      className="btn-autofill"
                    >
                      Auto Fill Dummy Data
                    </button>
                    <input
                      disabled={
                        userDetails.addressLineOne === "" ||
                        userDetails.phoneNumber === "" ||
                        userDetails.pincode === "" ||
                        userDetails.city === "" ||
                        userDetails.state === "" ||
                        userDetails.town === "" ||
                        userDetails.userName === ""
                      }
                      className="btn-saveAddr"
                      type="submit"
                    />
                  </form>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="bill-and-address-container flex_c">
            <div className="final-bill-card flex_c">
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
            </div>
            {selectedAddress ? (
              <div className="selectedAddress-card">
                <h3>DELIVER AT</h3>
                <span className="selected-name_number flex_r">
                  <b htmlFor="guest-user">{selectedAddress.userName}</b>
                  <b>{selectedAddress.phoneNumber}</b>
                </span>
                <span className="selected-flat_details flex_c">
                  <p>{selectedAddress.addressLineOne}</p>
                  <p>{selectedAddress.addressLineTwo}</p>
                  <p>
                    {selectedAddress.town}-{selectedAddress.pincode},{" "}
                    {selectedAddress.city}, {selectedAddress.state}{" "}
                  </p>
                </span>
              </div>
            ) : (
              <></>
            )}
            <button
              className="final-checkout-btn"
              disabled={selectedAddress === false}
              onClick={() => {
                navigateToRazorPayGateway();
              }}
            >
              Checkout
            </button>
            {selectedAddress === false ? (
              <p className="addr-error flex_r">Please Select An Address</p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
