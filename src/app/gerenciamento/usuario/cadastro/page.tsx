import { Suspense } from "react";
import CadastroUsuario from "./cadastro";

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <CadastroUsuario />
    </Suspense>
  );
}
