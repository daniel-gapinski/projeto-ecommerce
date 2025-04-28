"use client";

import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { ProductProps } from "../types/types";

interface CartItem extends ProductProps {
    quantity: number;
}

interface CartContextData {
    cart: CartItem[];
    addToCart: (product: ProductProps) => void;
    removeFromCart: (productId: string | number) => void;
    clearCart: () => void;
    incrementQuantity: (productId: string | number) => void;
    decrementQuantity: (productId: string | number) => void;
    getCartQuantity: () => number;
    setOncheckout: (checkout: string) => void;
    onCheckout: string;
    paymentIntent: string;
    setPaymentIntent: (paymentIntent: string) => void;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {

    const [cart, setCart] = useState<CartItem[]>([]);
    const [onCheckout, setOncheckout] = useState<string>("cart");
    const [paymentIntent, setPaymentIntent] = useState("");

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const addToCart = useCallback((product: ProductProps) => {
        setCart((prevCart) => {
            const productAlreadyInCart = prevCart.find((item) => item.id === product.id);

            if (productAlreadyInCart) {
                return prevCart.map(item => item.id === product.id ? {
                    ...item, quantity: item.quantity
                }
                    : item
                );

            } else {
                return [...prevCart, {
                    ...product, quantity: 1
                }
                ];
            }
        });
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const removeFromCart = useCallback((productId: string | number) => {
        setCart(prev => prev.filter(product => product.id !== productId));
    }, []);

    const clearCart = useCallback(() => {
        setCart([]);
    }, []);

    const incrementQuantity = useCallback((id: string | number) => {
        setCart((prevCart) => prevCart.map((item) => item.id === id ?
            { ...item, quantity: item.quantity + 1 } : item
        )
        );
    }, []);

    const decrementQuantity = useCallback((id: string | number) => {
        setCart((prevCart) => prevCart.map((item) => item.id === id ?
            { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
        )
        );
    }, []);

    const getCartQuantity = useCallback(() => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }, [cart]);

    return (
        <CartContext.Provider
            value={{
                cart,
                onCheckout,
                paymentIntent,
                setPaymentIntent,
                addToCart,
                removeFromCart,
                clearCart,
                incrementQuantity,
                decrementQuantity,
                getCartQuantity,
                setOncheckout,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}