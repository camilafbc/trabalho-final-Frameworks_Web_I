import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    // <div>
    //   <img src={imageUrl} alt={movie.title} />
    //   <h3>{movie.title}</h3>
    //   <p>{movie.overview}</p>
    // </div>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={imageUrl}
          alt={movie.title}
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" component="div">
          {movie.overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
