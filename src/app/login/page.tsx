import dynamic from "next/dynamic";
import { Suspense } from "react";

const LoginClient = dynamic(() => import("../components/LoginClient"), { ssr: false });

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Carregando login...</div>}>
      <LoginClient />
    </Suspense>
  );
}
