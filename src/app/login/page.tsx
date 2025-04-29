import LoginClient from "../components/LoginClient";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Carregando login...</div>}>
      <LoginClient />
    </Suspense>
  );
}
