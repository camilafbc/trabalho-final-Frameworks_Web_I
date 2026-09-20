import { InputBase, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput({ value, onChange }) {
  console.log(value, onChange);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        my: 2,
        backgroundColor: "background.paper",
        borderRadius: 1,
        p: 1,
        boxShadow: 1,
      }}
    >
      <IconButton
        type="button"
        sx={{ p: "10px", color: "text.primary" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar filmes"
        inputProps={{ "aria-label": "Buscar filmes" }}
      />
    </Box>
  );
}
