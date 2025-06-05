import { BOOKS } from "@/utils/constants";
import { Box, Chip, Stack, Typography } from "@mui/material";

type Props = {
  selectedGenre: string;
  handleSelectedGenre: (genre: string) => void;
};

const Filters = ({ selectedGenre, handleSelectedGenre }: Props) => {
  return (
    <Box mt={4}>
      <Typography variant="caption" sx={{ color: "#3c3c3c" }}>
        Todos os volumes ({BOOKS.length} títulos)
      </Typography>

      <Stack direction="row" spacing={1} mt={1}>
        <Chip
          label="Todos"
          variant={selectedGenre === "Todos" ? "filled" : "outlined"}
          color={selectedGenre === "Todos" ? "primary" : "default"}
          onClick={() => handleSelectedGenre("Todos")}
        />
        {[...new Set(BOOKS.map(({ genre }) => genre))]
          .map((genre) => (
            <Chip
              key={genre}
              label={genre}
              variant={selectedGenre === genre ? "filled" : "outlined"}
              color={selectedGenre === genre ? "primary" : "default"}
              onClick={() => handleSelectedGenre(genre)}
            />
          ))
          .slice(0, 5)}
      </Stack>
    </Box>
  );
};

export default Filters;
