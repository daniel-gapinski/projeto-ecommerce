import { SignIn } from "@clerk/nextjs";

interface LoginProps {
    searchParams: {
        redirectUrl: string;
    }
}

export default function Login({ searchParams: {redirectUrl } }: LoginProps) {
    return (
        <>
            <section className="mt-14">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <SignIn signUpUrl="/register" forceRedirectUrl={redirectUrl} />
                    </div>
                </div>
            </section>
        </>
    )
}