"use client";

import Image from "next/image";
import LogoImg from "../../../public/logo.png";
import { Home, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Sidebar() {

    const { getCartQuantity } = useContext(CartContext);
    const totalItems = getCartQuantity();

    return (
        <>
            <div className="bg-gray-50 hidden md:inline w-60 h-screen">
                <div className="flex justify-between p-3">
                    <Image width={27} height={27} objectFit="fill" src={LogoImg} alt="Logomarca" />
                </div>
                <Link href={"/"}>
                <div className="flex text-gray-500 items-center p-3 hover:bg-gray-200 cursor-pointer">
                    <div className="ml-2"><Home size={18} /></div>
                    <div className="ml-2 text-sm">Página Inicial</div>
                </div>
                </Link>
                <Link href={"/cart"}>
                    <div className="flex text-gray-500 items-center p-3 hover:bg-gray-200 cursor-pointer">
                        <div className="ml-2 flex relative">
                            <ShoppingCartIcon size={18} />
                            <div className="absolute flex justify-center items-center -top-2.5 -right-2 h-4 w-4 rounded-full bg-yellow-300">
                                <small className="text-[11px] text-black">{totalItems}</small>
                            </div>
                        </div>
                        <div className="ml-2 text-sm">Carrinho</div>
                    </div>
                </Link>
            </div>
        </>
    )
}