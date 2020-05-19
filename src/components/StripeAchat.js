import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import "./styles.css";

toast.configure();

function StripeAchat() {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 20,
    description: "Cool car"
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://localhost:8080/payment",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container">

      <StripeCheckout
        stripeKey={process.env.STRIPE_PUBLIC_KEY}
        token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
        className="stripe"
      />
    </div>
  );
}
export default StripeAchat

// <div className="product">
// <h1>{product.name}</h1>
// <h3>On Sale · ${product.price}</h3>
// </div>