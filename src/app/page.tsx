import { Box } from "@mui/material";

export default function LoginPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        width: "100vw",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "1200px",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <img src="/images/login.png" alt="Login" width="100%" />
      </Box>
    </Box>
  );
}
