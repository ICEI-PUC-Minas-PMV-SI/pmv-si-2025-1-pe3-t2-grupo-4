import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  IconButton,
  Modal,
  Link,
  Alert,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import styles from "../../app/page.module.css";

interface Props {
  open: boolean;
  onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

export default function Annotation({ open, onClose }: Props) {
  const [annotation, setAnnotation] = useState("");
  const [annotationType, setAnnotationType] = useState("current-page");

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "32px",
    boxShadow: 24,
    py: 4,
    backgroundColor: "#FFEEDA",
    borderRadius: 8,
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!annotation) {
      alert("Por favor, insira uma anotação.");
      return;
    }
    // Aqui você pode adicionar a lógica para salvar a anotação
    console.log("Anotação salva:", annotation);
    setAnnotation("");
    onClose(e, "backdropClick");
  };

  const MOCK_ANNOTATIONS =
    {
      "current-page": ["ANOTAÇÃO 1", "ANOTAÇÃO 2", "ANOTAÇÃO 3"],
      "all-pages": [
        "ANOTAÇÃO 1 - PÁGINA 1",
        "ANOTAÇÃO 2 - PÁGINA 2",
        "ANOTAÇÃO 3 - PÁGINA 3",
      ],
    }[annotationType] || [];

  return (
    <Modal open={open} onClose={onClose}>
      <Container maxWidth="xs" sx={modalStyle}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography
            variant="h5"
            textAlign="center"
            color="Black"
            fontWeight="bold"
          >
            Anotações
          </Typography>
          <IconButton onClick={(event) => onClose(event, "backdropClick")}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <FormControl>
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              sx={{ color: "#3C3C3C" }}
            >
              Visualizar anotações:
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={annotationType}
              onChange={(e) => setAnnotationType(e.target.value)}
              row
            >
              <FormControlLabel
                value="current-page"
                control={<Radio />}
                label="Página atual"
                sx={{ color: "#3C3C3C" }}
              />
              <FormControlLabel
                value="all-pages"
                control={<Radio />}
                label="Todas as páginas"
                sx={{ color: "#3C3C3C" }}
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            mt: 2,
            mb: 2,
          }}
        >
          {MOCK_ANNOTATIONS.length ? (
            MOCK_ANNOTATIONS.map((annotation, index) => (
              <Paper
                key={index}
                sx={{ backgroundColor: "#FFF3E0", padding: 2 }}
              >
                {annotation}
              </Paper>
            ))
          ) : (
            <Alert severity="info">Nenhuma anotação encontrada.</Alert>
          )}
        </Box>

        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            className={styles.customOutlinedField}
            name="email"
            label="Digite sua anotação"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setAnnotation(e.target.value);
            }}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSave}
            sx={{
              backgroundColor: "#F7931E",
              borderRadius: "30px",
              px: 5,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Salvar
          </Button>
        </Box>
      </Container>
    </Modal>
  );
}
