import { SignUp } from "@clerk/nextjs";

interface RegisterProps {
    searchParams: {
        redirectUrl: string;
    }
}

export default function Register({ searchParams: {redirectUrl } }: RegisterProps) {
    return (
        <>
            <section className="mt-14">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <SignUp signInUrl="/login" forceRedirectUrl={redirectUrl} />
                    </div>
                </div>
            </section>
        </>
    )
}