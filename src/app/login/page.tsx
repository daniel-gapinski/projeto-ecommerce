import { SignIn } from "@clerk/nextjs";

interface LoginProps {
  searchParams: Record<string, string | undefined>;
}

export default function Login({ searchParams }: LoginProps) {
  const redirectUrl = searchParams?.redirectUrl ?? "/";

  return (
    <section className="mt-14">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <SignIn signUpUrl="/register" forceRedirectUrl={redirectUrl} />
        </div>
      </div>
    </section>
  );
}
