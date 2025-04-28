"use client"

import { Check, ShoppingCart } from "lucide-react";
import { useEffect, useState, useContext } from "react";
import { fetchProducts } from "../actions";
import { ProductProps } from "@/app/types/types";
import Link from "next/link";
import ProductSkeleton from "./Skeleton";
import { CartContext } from "../contexts/CartContext";
import ProductImage from "./ProductImage";
import { formatPrice } from "@/lib/utils";

export default function Product() {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<ProductProps[]>([]);

    const { addToCart, cart } = useContext(CartContext);

    useEffect(() => {
        async function loadProducts() {
            const data = await fetchProducts();
            setProducts(data);
            setLoading(false);
        }

        loadProducts();

    }, []);

    if (loading) {
        return <ProductSkeleton />
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 md:max-w-7xl md:mx-auto">

            {products.map((product) => {

                const isInCart = cart.some(item => item.id === product.id);

                return (
                    <div key={product.id} className="flex flex-col rounded-xl overflow-hidden bg-white hover:scale-105 transition-all">
                        <Link href={`productDetail/${product.id}`} className="flex flex-col flex-grow">
                            <div className="relative h-60 w-full mb-5">
                                <ProductImage src={product.image} alt={product.name} />
                            </div>
                            <div className="p-2 flex flex-col gap-1">
                                <span className="text-sm truncate">{product.name}</span>
                                <small className="text-gray-600 truncate">{product.description}</small>
                            </div>
                        </Link>

                        <div className="p-2 flex justify-between items-center mt-auto">
                            <small className="text-yellow-400 font-bold">{formatPrice(product.price)}</small>
                            <div
                                onClick={() => addToCart(product)}
                                className={`${isInCart ? "bg-green-200" : "bg-gray-200 hover:bg-gray-300"}
                                    cursor-pointer w-6 h-6 flex items-center justify-center rounded-full`}
                            >
                                {isInCart ? <Check size={14} color="#30c229" /> : <ShoppingCart size={14} />}
                                
                            </div>
                        </div>
                    </div>

                )
            })}

        </div>
    );
}
