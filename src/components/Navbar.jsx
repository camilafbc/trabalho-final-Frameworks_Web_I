import { AppBar, Container, Toolbar, Typography, Box } from "@mui/material";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import SearchInput from "./SearchInput";
import { Link } from "react-router";

export default function Navbar({ value, onChange, onSubmit }) {
  return (
    <AppBar position="static" color="paper">
      <Toolbar variant="dense">
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "25% 75%" },
              alignItems: "center",
            }}
          >
            <Link to="/">
              <Box
                variant="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "center",
                  py: 2,
                }}
              >
                <MovieFilterIcon
                  sx={{ mr: 1, fontSize: 42 }}
                  color="secondary"
                />
                <Typography variant="h6" component="div">
                  CineFlow
                </Typography>
              </Box>
            </Link>
            <SearchInput
              value={value}
              onChange={onChange}
              onSubmit={onSubmit}
              style={{ maxWidth: 200 }}
            />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
