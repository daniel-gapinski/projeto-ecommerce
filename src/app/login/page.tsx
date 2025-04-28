import { SignIn } from "@clerk/nextjs";

interface LoginPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Login({ searchParams }: LoginPageProps) {
  const redirectUrl = typeof searchParams.redirectUrl === 'string' ? searchParams.redirectUrl : "/";

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
