import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";

const Catalog = () => {
  return (
    <Grid container spacing={2} mt={2}>
      {[
        {
          title: "A menina que roubava livros",
          author: "Markus Zusak",
          img: "https://m.media-amazon.com/images/I/71xBLRBYOiL.jpg",
          rating: "82%",
        },
        {
          title: "Harry Potter",
          author: "CS Lewis",
          img: "https://m.media-amazon.com/images/I/81t2CVWEsUL.jpg",
          rating: "88%",
        },
      ].map((book, i) => (
        <Grid key={i} size={6}>
          <Box key={i}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Grid size={6}>
                  <img
                    src={book.img}
                    alt={book.title}
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
                        {book.title}
                      </Typography>
                      <Typography variant="caption">{book.author}</Typography>
                    </Box>
                    <Stack direction="column" spacing={2} mt={2} mb={6}>
                      <Button size="small" variant="contained" color="warning">
                        Ler agora
                      </Button>
                      <Button size="small" variant="outlined">
                        Salvar na lista
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
