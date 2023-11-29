import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import { useParams } from "react-router-dom";
import usePropertiesBaught from "../../../../Hooks/usePropertiesBaught";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";



const CheckoutForm = () => {

    const { user } = useAuth()
    const [error, setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();

    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const { propertiesBaught, refetch } = usePropertiesBaught()

    const { id } = useParams()

    const booking = propertiesBaught?.find(bookings => bookings._id === id)

    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')

    // console.log(booking);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    useEffect(() => {
        if (booking)
            axiosSecure.post('/create-payment-intent', { price: booking.offered_amount })
                .then(res => {
                    // console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
    }, [axiosSecure, booking])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        // Confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log("Confirm error");
        } else {
            console.log("Payment intent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log("Transaction id:", paymentIntent.id);
                setTransactionId(paymentIntent.id)

                // Save payment method into DB
                const payment = {
                    sold_price: booking.offered_amount,
                    buyer_name: booking.buyer_name,
                    buyer_email: booking.buyer_email,
                    location: booking.location,
                    title: booking.title,
                    image: booking.image,
                    agent_name: booking.agent_name,
                    agent_email: booking.agent_email,
                    date: new Date().toLocaleDateString(undefined, options),
                    transactionId: paymentIntent.id,
                }

                const res = await axiosSecure.post('/payments', payment)
                console.log("Payment Saved", res.data);
                refetch()
                if (res.data?.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your payment is done! You have successfully bought the property!',
                        showConfirmButton: false,
                        background: '#343436',
                        heightAuto: '100px',
                        color: 'white',
                        timer: 2000
                    })

                    axiosPublic.put(`/requestedProperty/bought?id=${id}`)
                        .then(res => {
                            console.log(res.data);
                        })
                }
            }
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement

                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#424770',
                                '::placeholder': {

                                    backgroundColor: '#0060efb7',
                                    color: 'white',
                                },
                            },
                            invalid: {
                                color: 'black',
                            },
                        },
                    }}
                />

                <button className="btn btn-primary ms:w-[50px] text-white rounded-md w-1/2 mx-auto flex justify-center mt-5" disabled={!stripe || !clientSecret}>Confirm Payment</button>

                <p className="text-black text-center mt-3 font-semibold">{error}</p>
                {
                    transactionId && <p className="text-[#488DF4] text-center mt-3 font-semibold">Your Transaction Id: <span className="text-black">{transactionId}</span> </p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;