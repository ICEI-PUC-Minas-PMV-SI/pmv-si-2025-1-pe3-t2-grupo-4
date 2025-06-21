"use client";

import PdfReader from "@/components/PdfReader";
import { BOOKS } from "@/utils/constants";
import { Box, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

export default function Leitura() {
  const searchParams = useSearchParams();

  const selectedBookId = searchParams.get("bookId");

  const selectedBook = BOOKS.find((book) => book.id === selectedBookId);

  if (!selectedBook) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography component="h2" sx={{ color: "error.main", fontSize: 24 }}>
          Livro não encontrado
        </Typography>
      </Box>
    );
  }

  return (
    <Suspense>
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
          pdfUrl={`${process.env.NEXT_PUBLIC_URL}/${selectedBook?.file}`}
        />
      </Box>
    </Suspense>
  );
}
