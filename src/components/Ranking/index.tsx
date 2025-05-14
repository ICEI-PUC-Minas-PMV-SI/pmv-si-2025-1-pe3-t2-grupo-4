import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

const Ranking = () => {
  return (
    <Grid>
      <Box p={3}>
        <Paper sx={{ p: 2, borderRadius: 3 }}>
          <Typography variant="h6" fontWeight="bold">
            🏆 Top 10 por Categoria
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle2" fontWeight="bold">
              Ficção
            </Typography>
            <List dense>
              {[
                "O Último Código",
                "Ecos do Subsolo",
                "Fragmentos do Infinito",
                "A Máquina do Tempo Perdido",
                "A Cidade Invisível",
                "Lembranças de um Futuro Esquecido",
                "O Homem que Escrevia Sombras",
                "Estranhos no Andar de Cima",
                "Arquivos do Amanhã",
                "O Relógio que Parou no Caos",
              ].map((title, i) => (
                <ListItem key={i} disablePadding>
                  <ListItemText primary={`• ${title}`} />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle2" fontWeight="bold">
              Romance
            </Typography>
            <List dense>
              {[
                "Entre Café e Cartas",
                "Te Esperei na Primavera",
                "Promessas ao Entardecer",
                "No Compasso do Coração",
                "Quando as Estrelas Caem",
                "Um Amor para Dois Invernos",
              ].map((title, i) => (
                <ListItem key={i} disablePadding>
                  <ListItemText primary={`• ${title}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default Ranking;
