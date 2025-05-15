"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import Hero from "@/components/Hero";
import Filters from "@/components/Filters";
import Catalog from "@/components/Catalog";
import Ranking from "@/components/Ranking";

function App() {
  const genres = ["Todos", "Suspense", "Drama", "Ficção"];
  const [selectedGenre, setSelectedGenre] = useState("Todos");

  const handleSelectedGenre = (genre: string) => {
    setSelectedGenre(genre);
  };

  const catalogItems = [
    {
      title: "A menina que roubava livros",
      author: "Markus Zusak",
      genre: "Drama",
      img: "https://m.media-amazon.com/images/I/61L+4OBhm-L.jpg",
    },
    {
      title: "Biblioteca da Meia-Noite",
      author: "CS Lewis",
      genre: "Ficção",
      img: "https://m.media-amazon.com/images/I/81t2CVWEsUL.jpg",
    },
    {
      title: "O Senhor dos Anéis",
      author: "J.R.R. Tolkien",
      genre: "Ficção",
      img: "https://m.media-amazon.com/images/I/81KGUQ+PMgL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "O Código Da Vinci",
      author: "Dan Brown",
      genre: "Suspense",
      img: "https://m.media-amazon.com/images/I/91QSDmqQdaL._AC_UF1000,1000_QL80_.jpg",
    },
  ];

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
        <Filters
          genres={genres}
          selectedGenre={selectedGenre}
          handleSelectedGenre={handleSelectedGenre}
        />
        <Catalog books={catalogItems} selectedGenre={selectedGenre} />
      </Box>
      <Ranking />
    </Box>
  );
}

export default App;
