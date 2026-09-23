import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Box, Typography, Chip } from "@mui/material";
import { Link } from "react-router";
import Loader from "../components/Loader";
import PaginationComponent from "../components/Pagination";
import { useMovies } from "../hooks/useMovies";
import ErrorComponent from "../components/Error";
import { useFilmGenres } from "../hooks/useFilmGenres";
import { useSearchParams } from "react-router";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;
  const selectedGenre = parseInt(searchParams.get("genre")) || null;

  const [movieList, setMovieList] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [genres, setGenres] = useState([]);
  const { fetchMovies, loading, error } = useMovies();
  const { fetchFilmGenres } = useFilmGenres();

  useEffect(() => {
    async function fetch() {
      const results = await fetchMovies(page, selectedGenre);
      if (results) {
        setTotalPages(results.total_pages > 500 ? 500 : results.total_pages);
        setMovieList(results.results);
      }
    }

    fetch();
  }, [fetchMovies, page, selectedGenre]);

  useEffect(() => {
    async function fetchGenres() {
      const genres = await fetchFilmGenres();
      if (genres) {
        setGenres(genres.genres);
      }
    }

    fetchGenres();
  }, [fetchFilmGenres]);

  const handlePageChange = (event, newPage) => {
    setSearchParams((prevParams) => {
      prevParams.set("page", newPage);
      return prevParams;
    });
  };

  const handleGenreChange = (event, genreId) => {
    setSearchParams((prevParams) => {
      prevParams.set("genre", genreId);
      prevParams.set("page", 1);
      return prevParams;
    });
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorComponent errorMessage={error} />;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 1,
          py: 2,
          mb: 2,
        }}
      >
        {genres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            onClick={(event) => handleGenreChange(event, genre.id)}
            color={selectedGenre === genre.id ? "secondary" : "default"}
            clickable
          />
        ))}
      </Box>
      <Typography variant="h6" component="h1" color="secondary" sx={{ my: 4 }}>
        Últimos lançamentos
      </Typography>
      <Box
        sx={{
          minHeight: "100vh",
          gap: 2,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        {movieList.map((movie) => (
          <Link key={movie.id} to={`/filme/${movie.id}`}>
            <MovieCard key={movie.id} movie={movie} />
          </Link>
        ))}
      </Box>

      <PaginationComponent
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default Home;
