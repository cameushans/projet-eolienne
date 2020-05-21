import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function StripeAchat() {
  const [product] = React.useState({
    name: "Module",
    price: 20,
    description: "Module of wind turbine"
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://localhost:5035/payment",
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
        stripeKey="pk_test_3KHIoVpjbyTbhi9AHXGR7R4n00s3sUtLTe"
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