import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const MakePayment = () => {
    return (
        <div className="bg-white md:p-10">

            <div>
                <h2 className="text-2xl font-bold text-center my-5">Please Complete Your Payment!</h2>
            </div>

            <div className="border border-gray-800 md:p-5">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default MakePayment;