"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Hero from "@/components/Hero";
import Filters from "@/components/Filters";
import Catalog from "@/components/Catalog";
import Ranking from "@/components/Recommended";
import LastRead from "@/components/LastRead";
import { BOOKS } from "@/utils/constants";
import { getBooks } from "@/queries/api/book";
import { useGetBooks } from "@/queries/book";

function Home() {
  const [selectedGenre, setSelectedGenre] = useState("Todos");

  const handleSelectedGenre = (genre: string) => {
    setSelectedGenre(genre);
  };

  const {
    data: allBooks,
    isLoading: isLoadingGetBooks,
    error: errorGetBooks,
  } = useGetBooks();

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
          title="Dom Casmurro"
          subtitle="Uma história de amor e ciúmes no Rio de Janeiro do século XIX, Dom Casmurro é um dos maiores clássicos da literatura brasileira."
          bookId="4"
          imageAlt="Dom Casmurro"
          imageSrc="https://m.media-amazon.com/images/I/61Z2bMhGicL.jpg"
        />
        <LastRead books={allBooks?.slice(0, 5)} selectedGenre={selectedGenre} />
        <Filters
          selectedGenre={selectedGenre}
          handleSelectedGenre={handleSelectedGenre}
        />
        <Catalog books={allBooks} selectedGenre={selectedGenre} />
      </Box>
      <Ranking />
    </Box>
  );
}

export default Home;
