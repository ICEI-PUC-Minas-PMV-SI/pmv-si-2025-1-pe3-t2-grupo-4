"use client";

import PdfReader from "@/components/PdfReader";
import { Box } from "@mui/material";

const Leitura = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "90vh",
        width: "85%",
      }}
    >
      <PdfReader
        pdfUrl={`${process.env.NEXT_PUBLIC_URL}/dom-casmurro-machado-de-assis.pdf`}
      />
    </Box>
  );
};

export default Leitura;
