import { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ButtonProps {
    content: string;
    icon: LucideIcon;
}

export default function BackButton({ content, icon: Icon }: ButtonProps) {

    const router = useRouter();
    const [isMonted, setIsMonted] = useState(false);

    useEffect(() => {
        setIsMonted(true);
    }, []);

    function handleClick() {
        if (isMonted) {
            router.back();
        }
    }

    return (
        <>
            <button
                onClick={handleClick}
                className="flex justify-center items-center gap-1 px-5 hover:text-yellow-500 transition-all">
                <Icon size={16} />
                {content}
            </button>
        </>
    )
}