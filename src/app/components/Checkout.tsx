"use client";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Checkout() {

    const { cart, paymentIntent } = useContext(CartContext);

    useEffect(() => {
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: cart,
                payment_intent_id: paymentIntent,
            }),
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data.paymentIntent);
        });
        
    },[cart, paymentIntent]);

    return (
        <>
            <div>componente checkout</div>
        </>
    )
}
