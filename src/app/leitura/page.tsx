import { Suspense } from "react";
import Leitura from "./leitura";

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Leitura />
    </Suspense>
  );
}
