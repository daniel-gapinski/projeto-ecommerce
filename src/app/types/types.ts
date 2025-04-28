
export interface ProductProps {
    id: number | string;
    price: number | null;
    name: string;
    quantity?: number | 1;
    image: string;
    description: string | null;
    currency?: string;
    
    
}

export interface ProductDetailProps {
    id?: number | string;
}