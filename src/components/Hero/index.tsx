import React from "react";
import { Typography, Button, Grid, Stack, Chip, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

type HeroProps = {
  bookId: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
};

const Hero = ({
  bookId,
  title,
  subtitle,
  ctaText = "Saiba mais",
  onCtaClick,
  imageSrc,
  imageAlt = "Imagem de destaque",
}: HeroProps) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#fff",
        padding: { xs: 3, sm: 2 },
        borderRadius: 4,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Image src={imageSrc ?? ""} alt={imageAlt} height={360} width={256} />
      </Box>
      <Box
        sx={{
          paddingLeft: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ height: "100%" }}>
          <Typography variant="h5" fontWeight="bold" mt={1} color="#3C3C3C">
            {title}
          </Typography>
          <Typography
            component="p"
            mt={1}
            color="secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 7,
              WebkitBoxOrient: "vertical",
              flex: 1,
              color: "#666666",
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        <Stack direction="column" mb={1}>
          <Button
            variant="contained"
            color="warning"
            onClick={() => router.push(`/leitura?bookId=${bookId}`)}
            sx={{
              borderRadius: 6,
              "&:hover": {
                bgcolor: "warning.dark",
              },
            }}
          >
            Ler agora
          </Button>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#F5A623",
              borderRadius: 6,
              textTransform: "unset",
            }}
          >
            Mais informações
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
