import React from "react";
import { Typography, Button, Grid, Stack, Chip, Box } from "@mui/material";
import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
};

const Hero = ({
  title,
  subtitle,
  ctaText = "Saiba mais",
  onCtaClick,
  imageSrc,
  imageAlt = "Imagem de destaque",
}: HeroProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#fff",
        padding: 3,
        borderRadius: 4,
      }}
    >
      <Box sx={{ width: "40%", position: "relative" }}>
        <Image
          src="https://m.media-amazon.com/images/I/A1UjcPz4gZL._AC_UF1000,1000_QL80_.jpg"
          alt="Percy Jackson"
          height={360}
          width={256}
        />
      </Box>
      <Box
        sx={{
          width: "60%",
          paddingLeft: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" spacing={1} width="100%">
          <Chip label="Chega em Breve" color="default" sx={{ width: "50%" }} />
          <Chip label="Novo de Hoje" color="warning" sx={{ width: "50%" }} />
        </Stack>
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
      </Box>
    </Box>
  );
};

export default Hero;
