import { Bookmark, Home, MenuBook } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 4,
        gap: 2,
        position: "fixed",
        left: 15,
        mr: 6,
        pr: 6,
      }}
    >
      <IconButton sx={{ bgcolor: "#F5A623", color: "white" }}>
        <Home />
      </IconButton>
      <IconButton>
        <MenuBook />
      </IconButton>
      <IconButton>
        <Bookmark />
      </IconButton>
    </Box>
  );
};

export default Sidebar;
