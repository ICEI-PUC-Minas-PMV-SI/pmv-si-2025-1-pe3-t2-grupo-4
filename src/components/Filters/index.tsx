import { Box, Chip, Stack, Typography } from "@mui/material";

const Filters = () => {
  return (
    <Box mt={4}>
      <Typography variant="caption" sx={{ color: "#3c3c3c" }}>
        Todos os volumes (788 títulos)
      </Typography>
      <Stack direction="row" spacing={1} mt={1}>
        <Chip label="Todos" color="default" />
        <Chip label="Suspense" variant="outlined" />
        <Chip label="Romance" variant="outlined" />
        <Chip label="Ficção" variant="outlined" />
      </Stack>
    </Box>
  );
};

export default Filters;
