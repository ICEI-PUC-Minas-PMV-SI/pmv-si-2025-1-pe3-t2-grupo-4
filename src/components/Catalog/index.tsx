import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type Book = {
  id: string;
  titulo: string;
  autor: string;
  genero: string;
  detalhes: string;
  link: string;
  capa: string;
};

type Props = {
  books: Book[];
  selectedGenre: string;
};

const Catalog = ({ books, selectedGenre }: Props) => {
  const router = useRouter();

  return (
    <Grid
      container
      spacing={2}
      mt={2}
      direction={{ xs: "column", lg: "row" }}
      alignItems={{ xs: "center" }}
    >
      {books
        ?.filter((book) =>
          selectedGenre === "Todos" ? true : book.genero === selectedGenre,
        )
        ?.map((book, i) => (
          <Grid key={i} size={6}>
            <Box key={i}>
              <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Grid size={6}>
                    <img
                      src={book.capa}
                      alt={book.titulo}
                      style={{
                        width: 125,
                        height: 200,
                        objectFit: "cover",
                        borderRadius: 8,
                      }}
                    />
                  </Grid>
                  <Grid size={6}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                      }}
                    >
                      <Box>
                        <Typography fontWeight="bold" fontSize={14}>
                          {book.titulo}
                        </Typography>
                        <Typography variant="caption">{book.autor}</Typography>
                      </Box>
                      <Stack direction="column" mb={1}>
                        <Button
                          size="small"
                          variant="contained"
                          color="warning"
                          onClick={() =>
                            router.push(`/leitura?bookId=${book.id}`)
                          }
                          sx={{
                            borderRadius: 2,
                            "&:hover": {
                              bgcolor: "warning.dark",
                            },
                          }}
                        >
                          Ler agora
                        </Button>
                      </Stack>
                    </Box>
                  </Grid>
                </Box>
              </Paper>
            </Box>
          </Grid>
        ))}
    </Grid>
  );
};

export default Catalog;
