"use server";
import { getStripe } from "@/lib/stripe";
import { ProductProps } from "./types/types";

export async function fetchProducts(): Promise<ProductProps[]> {

    const stripe = getStripe();

    const products = await stripe.products.list();

    const formatedProducts = await Promise.all(
        products.data.map(async (product) => {
            const price = await stripe.prices.list({
                product: product.id,
            });
            return {
                id: product.id,
                name: product.name,
                price: price.data[0].unit_amount,
                image: product.images[0],
                description: product.description,
                currency: price.data[0].currency,
            }
        }),
    );

    return formatedProducts;
}

export async function fetchProduct(id: string) {

    const stripe = getStripe();

    const product = await stripe.products.retrieve(id);
    const price = await stripe.prices.list({
        product: product.id,
    });

    return {
        id: product.id,
        price: price.data[0].unit_amount,
        name: product.name,
        image: product.images[0],
        description: product.description,
        //currency: produto.data[0].currency,

    }
}
