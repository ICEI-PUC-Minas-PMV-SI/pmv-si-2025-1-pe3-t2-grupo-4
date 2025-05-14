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
    <Box sx={{ backgroundColor: "#fff", padding: 3, borderRadius: 4 }}>
      <Box>
        <Image
          src="https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg"
          alt="Percy Jackson"
          height={360}
          width={256}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" spacing={1}>
          <Chip label="Chega em Breve" color="default" />
          <Chip label="Novo de Hoje" color="warning" />
        </Stack>
        <Box sx={{ height: "100%" }}>
          <Typography variant="h5" fontWeight="bold" mt={1} color="textPrimary">
            Harry Potter e a Pedra Filosofal
          </Typography>
          <Typography
            component="p"
            mt={1}
            color="secondary"
            sx={{
              height: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1,
            }}
          >
            Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados
            por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi
            levado, então, para a casa dos tios que nada tinham a ver com o
            sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie
            de gata borralheira: maltratado pelos tios, herdava roupas velhas do
            primo gorducho, tinha óculos remendados e era tratado como um
            estorvo. No dia de seu aniversário de 11 anos, entretanto, ele
            parece deslizar por um buraco sem fundo, como o de Alice no país das
            maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira
            história e seu destino: ser um aprendiz de feiticeiro até o dia em
            que terá que enfrentar a pior força do mal, o homem que assassinou
            seus pais.
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
