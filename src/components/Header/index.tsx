import { Search } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 4,
        py: 2,
        backgroundColor: "#fff",
      }}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <Box>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
            alt="Logo"
            width={32}
            height={32}
          />
        </Box>

        <Box>
          <Typography fontWeight="bold" color="#B35E00">
            Leitura Livre
          </Typography>
          <Typography fontWeight="bold" variant="h5" color="secondary">
            Leitura Livre
          </Typography>
        </Box>
      </Box>
      <Box>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          disableUnderline
          sx={{ backgroundColor: "#F0F0F0", padding: 1, borderRadius: 6 }}
        />
      </Box>
      <Avatar
        sx={{
          bgcolor: "#F5A623",
          color: "#fff",
          width: "fit-content",
          padding: "6px 3px",
          borderRadius: 2,
        }}
      >
        Usuário
      </Avatar>
    </Box>
  );
};

export default Header;
