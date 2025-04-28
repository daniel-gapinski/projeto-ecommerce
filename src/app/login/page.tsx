import { SignIn } from "@clerk/nextjs";

export default async function Login({ searchParams }: { searchParams: { redirectUrl?: string } }) {
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
