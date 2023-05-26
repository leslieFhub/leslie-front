import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { saveShippingAddress } from "../Redux/Actions/cartActions";

const ShippingScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [brgy, setbrgy] = useState(shippingAddress.brgy);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, brgy, postalCode }));
    history.push("/payment");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
      <form className="Login col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
        <h6><b>DELIVERY ADDRESS</b></h6>
          
        <div className="form-group">
            <label htmlFor="city"></label>
            <select
              className="form-control"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              placeholder="Enter City"
            >
              <option value="">Select City</option>
              <option value="Bacoor">Bacoor</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="brgy"></label>
            <select
              className="form-control"
              id="brgy"
              value={brgy}
              onChange={(e) => setbrgy(e.target.value)}
              required
            >
              <option value="">Select Baranggay</option>
              <option value="Alima">Alima</option>
              <option value="Aniban I">Aniban I</option>
              <option value="Aniban II">Aniban II</option>
              <option value="Aniban III">Aniban III</option>
              <option value="Aniban IV">Aniban IV</option>
              <option value="Aniban V">Aniban V</option>
              <option value="Banalo">Banalo</option>
              <option value="Camposanto">Camposanto</option>
              <option value="Daang Bukid">Daang Bukid</option>
              <option value="Digman">Digman</option>
              <option value="Dulong Bayan">Dulong Bayan</option>
              <option value="Habay I">Habay I</option>
              <option value="Habay II">Habay II</option>
              <option value="Kaingin">Kaingin</option>
              <option value="Ligas I">Ligas I</option>
              <option value="Ligas II">Ligas II</option>
              <option value="Ligas III">Ligas III</option>
              <option value="Mabolo I">Alima</option>
              <option value="Mabolo II">Alima</option>
              <option value="Mabolo III">Alima</option>
              <option value="Maliksi I">Maliksi I</option>
              <option value="Maliksi II">Maliksi II</option>
              <option value="Maliksi III">Maliksi III</option>
              <option value="Niog I">Niog I</option>
              <option value="Niog II">Niog II</option>
              <option value="Niog III">Niog III</option>
              <option value="Panapaan I">Panapaan I</option>
              <option value="Panapaan II">Panapaan II</option>
              <option value="Panapaan III">Panapaan III</option>
              <option value="Panapaan IV">Panapaan IV</option>
              <option value="Panapaan V">Panapaan V</option>
              <option value="Panapaan VI">Panapaan VI</option>
              <option value="Panapaan VII">Panapaan VII</option>
              <option value="Panapaan VIII">Panapaan VIII</option>
              <option value="Real I">Real I</option>
              <option value="Real II">Real II</option>
              <option value="Salinas I">Salinas I</option>
              <option value="Salinas II">Salinas II</option>
              <option value="Salinas III">Salinas III</option>
              <option value="Salinas IV">Salinas IV</option>
              <option value="San Nicolas I">San Nicolas I</option>
              <option value="San Nicolas II">San Nicolas II</option>
              <option value="San Nicolas III">San Nicolas III</option>
              <option value="Sineguelasan">Sineguelasan</option>
              <option value="Tabing Dagat">Tabing Dagat</option>
              <option value="Talaba I">Talaba I</option>
              <option value="Talaba II">Talaba II</option>
              <option value="Talaba III">Talaba III</option>
              <option value="Talaba IV">Talaba IV</option>
              <option value="Talaba V">Talaba V</option>
              <option value="Talaba VI">Talaba VI</option>
              <option value="Talaba VII">Talaba VII</option>
              <option value="Zapote I">Zapote I</option>
              <option value="Zapote II">Zapote II</option>
              <option value="Zapote III">Zapote III</option>
              <option value="Zapote IV">Zapote IV</option>
              <option value="Zapote V">Zapote V</option>
              <option value="Bayanan">Bayanan</option>
              <option value="Mambog I">Mambog I</option>
              <option value="Mambog II">Mambog II</option>
              <option value="Mambog III">Mambog III</option>
              <option value="Mambog IV">Mambog IV</option>
              <option value="Mambog V">Mambog V</option>
              <option value="Molino I">Molino I</option>
              <option value="Molino II">Molino II</option>
              <option value="Molino III">Molino III</option>
              <option value="Molino IV">Molino IV</option>
              <option value="Molino V">Molino V</option>
              <option value="Molino VI">Molino VI</option>
              <option value="Molino VII">Molino VII</option>
              <option value="Queens Row Central">Queens Row Central</option>
              <option value="Queens Row East">Queens Row East</option>
              <option value="Queens Row West">Queens Row West</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Enter Street"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <button type="submit">Continue</button>
        </form>

      </div>
    </>
  );
};

export default ShippingScreen;
