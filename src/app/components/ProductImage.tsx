import Image from "next/image";

interface ImageProps {
    src: string;
    alt: string;
}

export default function ProductImage({ src, alt }: ImageProps) {
    return (
        <>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="100vw"
            />
        </>
    )
}