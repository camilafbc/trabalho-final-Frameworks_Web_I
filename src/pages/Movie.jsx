import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getMovieDetails } from "../api/tmdb";
import { Box, Typography, Chip } from "@mui/material";
import BreadCrumb from "../components/BreadCrumb";

export default function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const movieId = parseInt(id);

    const fetchMovieDetails = async () => {
      setLoading(true);

      try {
        const movieDetails = await getMovieDetails(id);
        setMovie(movieDetails);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!movie) {
    return <div>Filme não encontrado</div>;
  }

  return (
    <>
      <BreadCrumb items={[{ label: movie ? movie.title : "Filme" }]} />
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
      <Box variant="div" sx={{ p: 4 }}>
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
      </Box>
    </>
  );
}
