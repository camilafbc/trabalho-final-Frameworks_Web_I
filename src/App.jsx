import theme from "./theme";
import "./style.css";
import { useEffect, useState } from "react";
import { getPopularMovies } from "./api/tmdb";
import MovieCard from "./components/MovieCard";
import { CssBaseline, Container, Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      try {
        const list = await getPopularMovies(page);
        setMovieList(list.results);
        setTotalPages(list.total_pages > 500 ? 500 : list.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div
        style={{
          background: theme.palette.background.default,
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Container maxWidth="lg">
          <Box
            sx={{
              minHeight: "100vh",
              gap: 2,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            }}
          >
            {loading && (
              <p style={{ color: theme.palette.primary.main }}>Loading...</p>
            )}
            {movieList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Box>
          <Stack
            spacing={2}
            direction={"row"}
            justifyContent="center"
            sx={{ mt: 4, mb: 4 }}
          >
            <Pagination
              count={totalPages}
              page={page}
              variant="text"
              shape="rounded"
              color={"primary"}
              size="large"
              onChange={handlePageChange}
            />
          </Stack>
        </Container>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
