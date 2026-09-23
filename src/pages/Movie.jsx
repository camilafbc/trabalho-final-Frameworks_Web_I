import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Box, Typography, Chip } from "@mui/material";
import BreadCrumb from "../components/BreadCrumb";
import Loader from "../components/Loader";
import ErrorComponent from "../components/Error";
import { useMovies } from "../hooks/useMovies";
import { formatDate } from "../utils/formatDate";
import BackButton from "../components/BackButton";

export default function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const { fetchMovieDetails, loadingDetails, errorDetails } = useMovies();

  useEffect(() => {
    async function fetchDetails() {
      const details = await fetchMovieDetails(id);
      if (details) {
        setMovie(details);
      }
    }

    fetchDetails();
  }, [fetchMovieDetails, id]);

  if (loadingDetails) {
    return <Loader />;
  }

  if (!movie) {
    return <ErrorComponent errorMessage="Filme não encontrado." />;
  }

  if (errorDetails) {
    return <ErrorComponent errorMessage={errorDetails} />;
  }

  return (
    <>
      <BreadCrumb items={[{ label: movie ? movie.title : "Filme" }]} />
      <BackButton />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "300px", md: "450px" }, // Altura responsiva para o banner
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 3,
          display: "flex",
          alignItems: "flex-end", // Joga o conteúdo para a parte de baixo do banner
          mb: 4,
          overflow: "hidden",
          // Um overlay escuro para garantir que o texto fique legível sobre a imagem
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to top, rgba(18,18,18,0.9) 10%, rgba(18,18,18,0.2) 90%)",
          },
        }}
      >
        {/* Conteúdo que fica por cima do banner */}
        <Box sx={{ position: "relative", p: 4, zIndex: 1, width: "100%" }}>
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" color="secondary" gutterBottom>
            {movie.tagline}
          </Typography>
        </Box>
      </Box>
      <Box variant="div">
        <Box
          variant="div"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            gap: 2,
            mb: 2,
          }}
        >
          {movie.genres.length > 1 ? (
            movie.genres.map((genre) => (
              <Chip key={genre.id} color="secondary" label={genre.name} />
            ))
          ) : (
            <Chip color="secondary" label={movie.genres[0].name} />
          )}
        </Box>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.6, textAlign: "justify" }}
        >
          {movie.overview}
        </Typography>
        <Box variant="div" sx={{ mt: 4, mb: 10 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Informações adicionais
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>País de origem:</strong> {movie.origin_country.join(", ")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Data de lançamento:</strong>{" "}
            {formatDate(movie.release_date)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Duração:</strong> {movie.runtime} minutos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Nota:</strong> {movie.vote_average}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
