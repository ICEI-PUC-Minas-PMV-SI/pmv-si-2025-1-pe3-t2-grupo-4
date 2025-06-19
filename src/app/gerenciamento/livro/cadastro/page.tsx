"use client";

import { BOOKS } from "@/utils/constants";
import {
  Alert,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CadastroLivro() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bookId = searchParams.get("bookId");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
    if (error) {
      setError("");
    }
  };

  const [formData, setFormData] = useState({
    nome: "",
    autor: "",
    editora: "",
    descricao: "",
    capa: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("teste");
    if (bookId) {
      const fetchedBook = BOOKS.find((book) => book.id === bookId);
      console.log("Fetched Book:", fetchedBook);
      setFormData({
        nome: fetchedBook?.title || "",
        autor: fetchedBook?.author || "",
        editora: fetchedBook?.publisher || "",
        descricao: fetchedBook?.description || "",
        capa: fetchedBook?.img || "",
      });
    }
  }, [bookId]);

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
            minWidth: 700,
            p: 4,
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",

            gap: 2,
          }}
        >
          <Typography variant="h4" fontWeight="bold" align="center">
            {bookId ? "Edição" : "Cadastro"} de Livro
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          ></Box>
          {error && <Alert severity="error">{error}</Alert>}

          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              name="nome"
              label="Nome"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.nome}
            />
            <TextField
              name="autor"
              label="Autor"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.autor}
            />
            <TextField
              name="editora"
              label="Editora"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.editora}
            />
            <TextField
              name="descricao"
              label="Descrição"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.descricao}
            />
            <TextField
              name="capa"
              label="Link da Capa"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.capa}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 8 }}>
            <Button
              onClick={() => router.push("/gerenciamento/livro")}
              variant="outlined"
              sx={{
                borderRadius: "30px",
                px: 5,
                py: 1.5,
                color: "#B35E00",
                borderColor: "#B35E00",
              }}
            >
              Voltar
            </Button>
            <Button
              onClick={() => console.log("Cadastrar Livro", formData)}
              variant="contained"
              sx={{
                backgroundColor: "#B35E00",
                color: "#fff",
                borderRadius: "30px",
                px: 5,
                py: 1.5,
              }}
            >
              {bookId ? "Atualizar Livro" : "Cadastrar Livro"}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
