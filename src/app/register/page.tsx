"use client";

import { useSearchParams } from 'next/navigation';
import { SignUp } from "@clerk/nextjs";

export default function Register() {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirectUrl") || "/";

  return (
    <section className="mt-14">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <SignUp signInUrl="/register" forceRedirectUrl={redirectUrl} />
        </div>
      </div>
    </section>
  );
}
