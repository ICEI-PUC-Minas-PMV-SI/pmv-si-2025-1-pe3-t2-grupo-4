"use client";

import { Box, Chip, Stack, Typography } from "@mui/material";
import { useState } from "react";

type Props = {
  genres: string[];
  selectedGenre: string;
  handleSelectedGenre: (genre: string) => void;
};

const Filters = ({ genres, selectedGenre, handleSelectedGenre }: Props) => {
  return (
    <Box mt={4}>
      <Typography variant="caption" sx={{ color: "#3c3c3c" }}>
        Todos os volumes (788 títulos)
      </Typography>
      <Stack direction="row" spacing={1} mt={1}>
        {genres.map((genre) => (
          <Chip
            key={genre}
            label={genre}
            variant={selectedGenre === genre ? "filled" : "outlined"}
            color={selectedGenre === genre ? "primary" : "default"}
            onClick={() => handleSelectedGenre(genre)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Filters;
