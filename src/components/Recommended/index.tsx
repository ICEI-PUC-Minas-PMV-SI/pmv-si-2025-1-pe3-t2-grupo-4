import { BOOKS } from "@/utils/constants";
import { EmojiEvents } from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

const Recommended = () => {
  const router = useRouter();

  return (
    <Box>
      <Paper sx={{ p: 2, borderRadius: 3 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          display="flex"
          gap={1}
          justifyContent="center"
          alignItems="center"
        >
          <EmojiEvents /> Recomendados <EmojiEvents />
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box mt={2}>
          <List dense>
            {BOOKS.map(({ id, title }) => (
              <ListItem
                key={id}
                disablePadding
                sx={{
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                <ListItemText
                  primary={`• ${title}`}
                  onClick={() => router.push(`/leitura?bookId=${id}`)}
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          <Typography
            variant="h6"
            fontWeight="bold"
            justifyContent="center"
            alignItems="center"
          >
            Baseado nas suas leituras
          </Typography>
          <List dense>
            {BOOKS.map(({ id, title }) => (
              <ListItem
                key={id}
                disablePadding
                sx={{
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                <ListItemText
                  primary={`• ${title}`}
                  onClick={() => router.push(`/leitura?bookId=${id}`)}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Box>
  );
};

export default Recommended;
