import { Button, Grid, Paper, Stack, Typography } from "@mui/material";

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
          <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
            <Grid container spacing={1}>
              <Grid>
                <img
                  src={book.img}
                  alt={book.title}
                  style={{ width: "100%", borderRadius: 8 }}
                />
              </Grid>
              <Grid>
                <Typography fontWeight="bold" fontSize={14}>
                  {book.title}
                </Typography>
                <Typography variant="caption">{book.author}</Typography>
                <Stack direction="row" spacing={1} mt={1}>
                  <Button size="small" variant="contained" color="warning">
                    Ler agora
                  </Button>
                  <Button size="small" variant="outlined">
                    Salvar na lista
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Catalog;
