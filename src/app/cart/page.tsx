"use client";

import { useContext } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";
import CustomButton from "../components/CustomButton";
import { CartContext } from "../contexts/CartContext";
import ProductNotFound from "../components/ProductNotFound";
import { formatPrice } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Checkout from "../components/Checkout";

export default function Cart() {

    const { cart, onCheckout, removeFromCart, clearCart, incrementQuantity, decrementQuantity, setOncheckout } = useContext(CartContext);
    const { user } = useUser();
    const router = useRouter();
    const total = cart.reduce((acc, item) => acc + item.price! * item.quantity, 0);

    function handleClear() {
        clearCart();
    }

    function handleRemove(id: string | number) {
        removeFromCart(id);
    }

    function handleCheckout() {
        if (!user) {
            router.push(`/login?redirectUrl=cart`);
        }
        setOncheckout("checkout");
    }

    return (
        <>
            <div className="flex">
                <Sidebar />
                <Container>
                    <Header />
                    <Page>

                        {onCheckout === "cart" ? (
                            <div className="max-w-5xl mx-auto w-full px-4 space-y-6">
                                <div className="flex justify-between">
                                    <h2 className="text-xl">Meu Carrinho</h2>
                                    {cart.length > 0 && (
                                        <button onClick={() => handleClear()} className="bg-red-100 hover:bg-red-200 hover:text-red-700 transition-all text-red-500 rounded-xl p-2 text-sm">Limpar carrinho</button>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between gap-4 p-4 bg-white rounded-xl shadow-sm">
                                            <div className="flex items-center gap-4">
                                                <div className="relative min-w-24 min-h-24 rounded-lg overflow-hidden bg-gray-100">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    <p>{item.name}</p>
                                                    <p className="text-sm text-gray-500">{item.description}</p>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <span className="text-sm">Qtd:</span>
                                                        <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                                                            <button
                                                                onClick={() => decrementQuantity(item.id)}
                                                                className="text-gray-600 hover:text-black">
                                                                <Minus size={16} />
                                                            </button>
                                                            <span className="px-2">{item.quantity}</span>
                                                            <button
                                                                onClick={() => incrementQuantity(item.id)}
                                                                className="text-gray-600 hover:text-black">
                                                                <Plus size={16} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <span className="text-yellow-500">{formatPrice(item.price)}</span>
                                                <button
                                                    onClick={() => handleRemove(item.id)}
                                                    className="text-red-500 hover:text-red-600 flex items-center gap-1 text-sm">
                                                    <Trash2 size={16} />
                                                    Remover
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {cart.length > 0 ? (
                                    <div className="border-t pt-4 flex justify-end">
                                        <div className="flex flex-col items-center gap-1">
                                            <p>Total: <span className="text-yellow-500">R$ {formatPrice(total)}</span></p>
                                            {onCheckout === "cart" ?
                                                <CustomButton onClick={() => handleCheckout()} content="Finalizar compra" />
                                                : ""}
                                        </div>
                                    </div>
                                ) : (
                                    <ProductNotFound />
                                )}
                            </div>
                        ): (
                            <Checkout />
                        )}

                    </Page>
                </Container>
            </div>
        </>
    );
}
