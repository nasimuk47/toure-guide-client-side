/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useBookings from "../../hooks/usebookings";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = () => {
    const [error, setError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const [bookings, refetch] = useBookings();

    const totalPrice = bookings.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosPublic
                .post("/create-payment-intent", { price: totalPrice })
                .then((res) => {
                    setClientSecret(res.data.clientSecret);
                })
                .catch((error) => {
                    console.error("Error fetching client secret:", error);
                });
        }
    }, [axiosPublic, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: "card",
                card,
            });

            if (error) {
                console.error("Payment error:", error);
                setError(error.message);
            } else {
                setError(""); // Reset error state
            }

            // Confirm payment
            const { paymentIntent, error: confirmError } =
                await stripe.confirmCardPayment(clientSecret, {
                    payment_method: {
                        card: card,
                        billing_details: {
                            email: user?.email || "anonymous",
                            name: user?.displayName || "anonymous",
                        },
                    },
                });

            if (confirmError) {
                console.error("Confirm error:", confirmError);
            } else {
                console.log("Payment confirmed:", paymentIntent);
                setTransactionId(paymentIntent.id);

                // Clear bookings after successful payment
                refetch();

                Swal.fire({
                    title: "Payment Successful",
                    text: `Transaction ID: ${paymentIntent.id}`,
                    icon: "success",
                });
            }
        } catch (error) {
            console.error("Error processing payment:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                                color: "#aab7c4",
                            },
                        },
                        invalid: {
                            color: "#9e2146",
                        },
                    },
                }}
            />
            <button
                className="btn btn-sm btn-primary my-4"
                type="submit"
                disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && (
                <p className="text-green-600">
                    Your transaction id: {transactionId}
                </p>
            )}
        </form>
    );
};

export default CheckoutForm;
