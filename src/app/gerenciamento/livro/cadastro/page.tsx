import { Suspense } from "react";
import CadastroLivro from "./cadastro";

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <CadastroLivro />
    </Suspense>
  );
}
