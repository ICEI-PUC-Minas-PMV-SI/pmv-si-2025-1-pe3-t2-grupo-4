"use client";

import { USERS } from "@/utils/constants";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function CadastroUsuario() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

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
    email: "",
    cargo: "reader",
    senha: "",
  });

  const [error, setError] = useState("");

  const mapCargo = {
    Leitor: "reader",
    Moderador: "moderator",
    Admin: "admin",
  };

  useEffect(() => {
    console.log("teste");
    if (userId) {
      const fetchedUser = USERS.find((user) => user.id.toString() === userId);
      console.log("Fetched User:", fetchedUser);
      setFormData({
        nome: fetchedUser?.nome || "",
        email: fetchedUser?.email || "",
        cargo:
          mapCargo[fetchedUser?.cargo as keyof typeof mapCargo] || "reader",
        senha: "",
      });
    }
  }, [userId]);

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
            {userId ? "Edição" : "Cadastro"} de Usuário
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
              name="email"
              label="E-mail"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formData.email}
            />
            {!userId && (
              <TextField
                name="senha"
                label="Senha"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                value={formData.senha}
              />
            )}

            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                Nível de Acesso
              </Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={formData.cargo}
                  onChange={(e) =>
                    setFormData({ ...formData, cargo: e.target.value })
                  }
                  row
                >
                  <FormControlLabel
                    value="reader"
                    control={<Radio />}
                    label="Leitor"
                    sx={{ color: "#3C3C3C" }}
                  />
                  <FormControlLabel
                    value="moderator"
                    control={<Radio />}
                    label="Moderador"
                    sx={{ color: "#3C3C3C" }}
                  />
                  <FormControlLabel
                    value="admin"
                    control={<Radio />}
                    label="Administrador"
                    sx={{ color: "#3C3C3C" }}
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 8 }}>
            <Button
              onClick={() => router.push("/gerenciamento/usuario")}
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
              {userId ? "Atualizar Livro" : "Cadastrar Usuário"}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
