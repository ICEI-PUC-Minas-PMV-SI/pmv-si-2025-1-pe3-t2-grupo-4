import React from "react";
import { Box } from "@mui/material";
import Hero from "@/components/Hero";
import Filters from "@/components/Filters";
import Catalog from "@/components/Catalog";
import Ranking from "@/components/Ranking";

function App() {
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
        <Filters />
        <Catalog />
      </Box>
      <Ranking />
    </Box>
  );
}

export default App;
