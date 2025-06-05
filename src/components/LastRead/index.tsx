import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/navigation";

type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  img: string;
  file: string;
};

type Props = {
  books: Book[];
  selectedGenre: string;
};

const LastRead = ({ books, selectedGenre }: Props) => {
  const router = useRouter();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <Typography
        fontWeight="bold"
        fontSize={26}
        color="#3C3C3C"
        sx={{ pt: 2 }}
      >
        Continuar Leitura
      </Typography>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        style={{ width: "100%", padding: "16px 0" }}
        navigation={true}
      >
        {books.map((book, i) => (
          <SwiperSlide
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 2,
                borderRadius: 3,
                width: 180,
                minHeight: 260,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1) ",
                },
              }}
              onClick={() => router.push(`/leitura?bookId=${book.id}`)}
            >
              <img
                src={book.img}
                alt={book.title}
                style={{
                  width: 80,
                  height: 120,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: 8,
                  display: "block",
                }}
              />
              <Typography fontWeight="bold" fontSize={14} align="center">
                {book.title}
              </Typography>
              <Typography variant="caption" align="center">
                {book.author}
              </Typography>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default LastRead;
