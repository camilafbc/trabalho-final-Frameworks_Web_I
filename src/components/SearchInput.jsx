import { InputBase, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput({ value, onChange, onSubmit }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
  };

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
        onClick={onSubmit}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar filmes"
        inputProps={{ "aria-label": "Buscar filmes" }}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    </Box>
  );
}
