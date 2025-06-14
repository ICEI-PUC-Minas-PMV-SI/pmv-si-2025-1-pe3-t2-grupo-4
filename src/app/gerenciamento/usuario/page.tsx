"use client";

import DynamicTable from "@/components/Table";
import { BOOKS, USERS } from "@/utils/constants";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function GerenciamentoUsuario() {
  const router = useRouter();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          height: 200,
          width: 150,
          borderRadius: 5,
          padding: 2,
          gap: 1,
        }}
      >
        <img
          src={
            "https://img.freepik.com/fotos-gratis/close-up-de-uma-jovem-profissional-fazendo-contato-visual-contra-um-fundo-colorido_662251-651.jpg?semt=ais_hybrid&w=740"
          }
          alt={"Livro"}
          style={{
            width: 120,
            height: 120,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography>Bem vinda</Typography>
          <Typography sx={{ fontWeight: "bold" }}>Mariana</Typography>
        </Box>
      </Paper>
      <Box>
        <Paper
          sx={{
            backgroundColor: "#d9d9d9",
            width: "100%",
            p: 4,
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <h1>Gerenciamento de Usuários </h1>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#B35E00",
                color: "#fff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => router.push("/gerenciamento/usuario/cadastro")}
            >
              Adicionar Usuário
            </Button>
          </Box>
          <DynamicTable
            columns={[
              { id: "nome", label: "Nome" },
              { id: "email", label: "E-mail" },
              { id: "cargo", label: "Função" },
            ]}
            data={USERS}
            uniqueKey="id"
            onEdit={(row) =>
              router.push(`/gerenciamento/usuario/cadastro?userId=${row.id}`)
            }
            onDelete={(rowId) => console.log("Delete:", rowId)}
          />
        </Paper>
      </Box>
    </Box>
  );
}
