import { useCallback, useState } from "react";
import { getFilmGenres } from "../api/tmdb";

export const useFilmGenres = () => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchFilmGenres = useCallback(async () => {
    try {
      setLoading(true);
      const genres = await getFilmGenres();
      return genres;
    } catch (error) {
      console.error("Error fetching film genres:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading, 
    error,
    fetchFilmGenres,
  };
}