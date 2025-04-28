import { LucideIcon } from "lucide-react";

interface ButtonProps {
    content: string;
    onClick?: () => void;
    icon?: LucideIcon;
}

export default function CustomButton({ content, onClick, icon: Icon }: ButtonProps) {
    return (
        <>
            <button 
                onClick={onClick}
                className="bg-yellow-300 flex justify-center gap-1 items-center px-4 py-2 rounded-2xl text-sm hover:bg-yellow-400">
                {Icon && <Icon size={14} />}
                {content}
            </button>
        </>
    )
}