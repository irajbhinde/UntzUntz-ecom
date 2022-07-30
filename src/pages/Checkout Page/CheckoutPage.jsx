import { BillCard } from "../../components";
import CartNav from "../../components/CartComponents/cartNav/CartNav";
import { useCart } from "../../components/context";
import "./checkout-page.css";
import { useFormik } from "formik";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartState, cartDispatch } = useCart();
  const { userAddress } = cartState;
  const [addNewAddress, setAddNewAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState();
  const formik = useFormik({
    initialValues: {
      userName: "",
      phoneNumber: "",
      addressLineOne: "",
      addressLineTwo: "",
      pincode: "",
      city: "",
      town: "",
      state: "",
    },

    onSubmit: (values, { resetForm }) => {
      cartDispatch({ type: "ADD_ADDRESS", payload: values });
      resetForm();
    },
  });

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
                    <b for="guest-user">{address.userName}</b>
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
                    onSubmit={formik.handleSubmit}
                    className="addr-form-container flex_c"
                  >
                    <div className="addr-input-container flex_r">
                      <input
                        placeholder="Name*"
                        id="userName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.userName}
                      />
                      <input
                        placeholder="Mobile Number*"
                        id="phoneNumber"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                      />
                    </div>
                    <div className="addr-input-container flex_r">
                      <input
                        placeholder="Pincode*"
                        id="pincode"
                        type="number"
                        maxLength={6}
                        onChange={formik.handleChange}
                        value={formik.values.pincode}
                      />
                      <input
                        placeholder="City*"
                        id="city"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                      />
                    </div>
                    <div className="addr-input-container flex_r">
                      <input
                        placeholder="Town*"
                        id="town"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.town}
                      />
                      <input
                        placeholder="State*"
                        id="state"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.state}
                      />
                    </div>
                    <input
                      placeholder="Address Line One*"
                      id="addressLineOne"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.addressLineOne}
                    />
                    <input
                      placeholder="Address Line Two*"
                      id="addressLineTwo"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.addressLineTwo}
                    />
                    <input
                      disabled={
                        formik.values.addressLineOne === "" ||
                        formik.values.addressLineTwo === "" ||
                        formik.values.phoneNumber === "" ||
                        formik.values.pincode === "" ||
                        formik.values.city === "" ||
                        formik.values.state === "" ||
                        formik.values.town === "" ||
                        formik.values.userName === ""
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
            <BillCard />
            {selectedAddress ? (
              <div className="selectedAddress-card">
                <h3>DELIVER AT</h3>
                <span className="selected-name_number flex_r">
                  <b for="guest-user">{selectedAddress.userName}</b>
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
          </div>
        </div>
      </div>
    </>
  );
}
