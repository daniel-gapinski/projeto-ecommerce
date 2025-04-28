import { ReactNode } from "react"

interface PageProps {
    children: ReactNode;
}

export default function Page({ children }: PageProps) {
    return (
        <>
            <div className="p-3 mt-2">{children}</div>
        </>
    )
}