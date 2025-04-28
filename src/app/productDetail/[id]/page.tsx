"use client"

import { fetchProduct } from "@/app/actions";
import BackButton from "@/app/components/BackButton";
import Container from "@/app/components/Container";
import CustomButton from "@/app/components/CustomButton";
import Header from "@/app/components/Header";
import Page from "@/app/components/Page";
import ProductImage from "@/app/components/ProductImage";
import Sidebar from "@/app/components/Sidebar";
import { CartContext } from "@/app/contexts/CartContext";
import { ProductProps } from "@/app/types/types";
import { formatPrice } from "@/lib/utils";
import { ArrowLeft, Check } from "lucide-react";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function ProductDetail() {

    const { id } = useParams();
    const { addToCart, cart } = useContext(CartContext);
    const [product, setProduct] = useState<ProductProps>();

    useEffect(() => {
        async function loadProduct() {
            const data = await fetchProduct(id as string);
            setProduct(data);
        }

        loadProduct();

    }, []);

    return (
        <>
            {product && (
                <div className="flex">
                    <Sidebar />
                    <Container>
                        <Header /> 
                        <BackButton content="Voltar" icon={ArrowLeft}/>
                        <Page>
                            <div className="p-2 flex flex-col md:flex-row gap-3 md:max-w-7xl md:mx-auto">
                                <div className="relative md:min-w-1/2 h-92">
                                    <ProductImage src={product.image} alt={product.name} />
                                    
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <h2 className="mt-2">{product.name}</h2>

                                    <small>{product.description}</small>

                                    <p>{formatPrice(product.price)}</p>

                                    <div className="mt-2">
                                        <CustomButton 
                                            content={cart.some(item => item.id === product.id) ? "Adicionado ao carrinho" : "Comprar"}
                                            icon={cart.some(item => item.id === product.id) ? Check : undefined}
                                            onClick={() => addToCart(product)} 
                                        />
                                    </div>
                                </div>
                            </div>
                        </Page>
                    </Container>
                </div>
            )}
        </>
    )
}