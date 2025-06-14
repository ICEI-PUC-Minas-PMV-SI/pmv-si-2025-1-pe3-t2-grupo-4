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
          title={BOOKS[0].title}
          subtitle={BOOKS[0].description}
          bookId={BOOKS[0].id}
          imageAlt={BOOKS[0].title}
          imageSrc={BOOKS[0].img}
        />
        <LastRead books={BOOKS.slice(0, 5)} selectedGenre={selectedGenre} />
        <Filters
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
