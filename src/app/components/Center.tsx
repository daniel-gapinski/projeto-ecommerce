import { ReactNode } from "react"

interface CenterProps {
    children: ReactNode
}

export default function Center({ children }: CenterProps) {
    return(
        <>
            <div className="flex justify-center items-center py-5">
               {children} 
            </div>
        </>
    )
}