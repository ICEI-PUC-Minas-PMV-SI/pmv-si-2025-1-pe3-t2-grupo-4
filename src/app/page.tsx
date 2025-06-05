"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import Hero from "@/components/Hero";
import Filters from "@/components/Filters";
import Catalog from "@/components/Catalog";
import Ranking from "@/components/Recommended";
import LastRead from "@/components/LastRead";
import { BOOKS } from "@/utils/constants";

function App() {
  const genres = ["Todos", "Suspense", "Drama", "Ficção"];
  const [selectedGenre, setSelectedGenre] = useState("Todos");

  const handleSelectedGenre = (genre: string) => {
    setSelectedGenre(genre);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      <Box sx={{ maxWidth: 768 }}>
        <Hero
          title="Percy Jackson"
          subtitle="A coletânea Percy Jackson e os Olimpianos acompanha um adolescente que descobre ser filho de um deus grego que, entre monstros, profecias e heróis, ele precisa salvar o mundo moderno da fúria dos deuses antigos."
        />
        <LastRead books={BOOKS.slice(0, 5)} selectedGenre={selectedGenre} />
        <Filters
          genres={genres}
          selectedGenre={selectedGenre}
          handleSelectedGenre={handleSelectedGenre}
        />
        <Catalog books={BOOKS} selectedGenre={selectedGenre} />
      </Box>
      <Ranking />
    </Box>
  );
}

export default App;
