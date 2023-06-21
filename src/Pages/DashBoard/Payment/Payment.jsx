import { loadStripe } from "@stripe/stripe-js";
import CheackOutPage from "./CheackOutPage";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT);

const Payment = () => {
  const [cart, isLoading] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const totalPrice = parseFloat(total.toFixed(2));

  // if (totalPrice === 0) {
  //   if (isLoading) {
  //     return "fdgidf d";
  //   }
  // }

  return (
    <div className="m-20">
      <h2 className=" my-5 text-orange-400">Payment System</h2>
      <Elements stripe={stripePromise}>
        {" "}
        <CheackOutPage cart={cart} price={totalPrice}></CheackOutPage>
      </Elements>
    </div>
  );
};

export default Payment;
