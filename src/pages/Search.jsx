import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router";
import Loader from "../components/Loader";
import BreadCrumb from "../components/BreadCrumb";
import { useMovies } from "../hooks/useMovies";
import ErrorComponent from "../components/Error";
import PaginationComponent from "../components/Pagination";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");
  const page = parseInt(searchParams.get("page")) || 1;

  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const { fetchSearchMovies, loadingSearch, errorSearch } = useMovies();

  useEffect(() => {
    async function fetchResults() {
      const data = await fetchSearchMovies(query, page);
      if (data) {
        setResults(data.results);
        setTotalResults(data.total_results);
        setTotalPages(data.total_pages > 500 ? 500 : data.total_pages);
      }
    }

    fetchResults();
  }, [fetchSearchMovies, page, query]);

  const handlePageChange = (event, newPage) => {
    setSearchParams((prevParams) => {
      prevParams.set("page", newPage);
      return prevParams;
    });
  };

  if (loadingSearch) {
    return <Loader />;
  }

  if (errorSearch) {
    return <ErrorComponent errorMessage={errorSearch} />;
  }

  return (
    <>
      <BreadCrumb items={[{ label: "Busca" }]} />

      <Typography sx={{ mb: 2, color: "text.secondary" }}>
        {totalResults} resultados encontrados
      </Typography>
      <Box
        sx={{
          minHeight: "100vh",
          gap: 2,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        {results.length === 0 && <p>Nenhum filme encontrado.</p>}
        {results.map((movie) => (
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
