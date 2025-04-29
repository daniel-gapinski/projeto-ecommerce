import RegisterClient from "../components/RegisterClient";
import { Suspense } from "react";

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Carregando register...</div>}>
      <RegisterClient />
    </Suspense>
  );
}
