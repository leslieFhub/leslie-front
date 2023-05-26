import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { savePaymentMethod } from "../Redux/Actions/cartActions";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { paymentMethod } = cart;

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethod);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(selectedPaymentMethod));
    history.push("/placeorder");
  };

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form className="Login2 col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
          <h6><b>SELECT PAYMENT METHOD</b></h6>
          <div className="payment-container">
            <div className={`radio-container ${selectedPaymentMethod === "PayPal" ? "selected" : ""}`}>
              <input
                className="form-check-input"
                type="radio"
                value="PayPal"
                checked={selectedPaymentMethod === "PayPal"}
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="paypal-option">
                <i className="fab fa-paypal"></i> PayPal or Credit Card
              </label>
            </div>

            <div className={`radio-container ${selectedPaymentMethod === "cashOnDelivery" ? "selected" : ""}`}>
              <input
                className="form-check-input"
                type="radio"
                value="cashOnDelivery"
                checked={selectedPaymentMethod === "cashOnDelivery"}
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="cod-option">
                <i className="fas fa-money-bill-wave"></i> Cash on Delivery
              </label>
            </div>
          </div>

          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
