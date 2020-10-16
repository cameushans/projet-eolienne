import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function StripeAchat(total){
  // const [product] = React.useState({
  //   name: "Module",
  //   // price: 20,
  //   price: total,
  //   description: "Module of wind turbine"
  // });
  // export const [product] = {
  //   articles: {
  //     name: null,
  //     number: null,
  //     totalPrice: null
  //   },
  // };

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://lu-back.rayane-dev.com/payment",
      // "http://localhost:5035/payment",
      { token, total }
      
    );
    console.log("TOKEN ET PRODUCT " ,token, total)

    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("opération réalisée avec succès !", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  console.log("PRODUCT PRICE", total)
  return (
    <div className="container">

      <StripeCheckout
        stripeKey="pk_test_3KHIoVpjbyTbhi9AHXGR7R4n00s3sUtLTe"
        token={handleToken}
        amount={total.total * 100}
        name="Luxeole Articles"
        currency="EUR"
        billingAddress
        shippingAddress
        className="stripe"
      >
        <button className="btn btn-primary btn-purchase" type="button">Payer</button>
      </StripeCheckout>
    </div>
  );
}
export default StripeAchat