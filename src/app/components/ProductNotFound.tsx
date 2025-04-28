"use client";

import { ShoppingBag, ShoppingCart } from "lucide-react";
import BackButton from "./BackButton";

export default function ProductNotFound() {

    return (
        <>
            <div className="w-full flex">
                <div className="w-full flex flex-col items-center justify-center mt-8">
                    <ShoppingBag size={102} color="#a9a9a9" /> 
                    <div className="mt-2 flex flex-col">
                        <h2 className="text-gray-500 mb-2">Ainda não há produtos em seu carrinho</h2>
                        <BackButton content="Adicionar ao carrinho" icon={ShoppingCart} />
                    </div>
                </div>
            </div>
        </>
    )
}