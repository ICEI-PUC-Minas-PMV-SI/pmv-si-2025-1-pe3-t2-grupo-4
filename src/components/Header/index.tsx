"use client";

import { AccountCircle, Search } from "@mui/icons-material";

import {
  Avatar,
  Box,
  Button,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import Image from "next/image";

interface UserMenuProps {
  user: { name: string; avatarUrl?: string } | null;
}

const Header = ({
  onRegisterClick,
  onLoginClick,
  user,
}: {
  user: any;
  onRegisterClick: () => void;
  onLoginClick: () => void;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 4,
        py: 2,
        backgroundColor: "#fff",
        zIndex: 1000,
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

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography fontWeight="bold" color="#B35E00">
            Leitura
          </Typography>
          <Typography
            fontWeight="bold"
            variant="h5"
            color="secondary"
            lineHeight={1}
          >
            Livre
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
      {user ? (
        <Avatar
          sx={{
            bgcolor: "#F5A623",
            color: "#fff",
            width: "fit-content",
            padding: "8px 24px",
            borderRadius: 5,
            gap: 1,
          }}
        >
          <AccountCircle />
          Usuário
        </Avatar>
      ) : (
        <>
          <Box gap={2} display="flex">
            <Button
              sx={{ bgcolor: "#F5A623" }}
              variant="contained"
              onClick={onLoginClick}
            >
              Login
            </Button>
            <Button
              sx={{ bgcolor: "#F5A623" }}
              variant="contained"
              onClick={onRegisterClick}
            >
              Cadastro
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Header;
