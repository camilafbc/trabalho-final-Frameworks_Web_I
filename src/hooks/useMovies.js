import { useState, useCallback} from "react";
import { getPopularMovies, getMovieDetails, searchMovies } from "../api/tmdb";

export const useMovies = () => {
  
  const [loading, setLoading] = useState(false);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [error, setError] = useState(null);
  const [errorDetails, setErrorDetails] = useState(null);
  const [errorSearch, setErrorSearch] = useState(null);

  const fetchMovies = useCallback(
    async (page, genre) => {
      setLoading(true);
      try {
        const list = await getPopularMovies(page, genre);
        return list;
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }, []
  );

  const fetchMovieDetails = useCallback(async (id) => {
      setLoadingDetails(true);

      try {
        const movieDetails = await getMovieDetails(id);
        return movieDetails;
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setErrorDetails(error);
      } finally {
        setLoadingDetails(false);
      }
    },[])

  const fetchSearchMovies = useCallback(
    async (query, page) => {
      setLoadingSearch(true);
      try {
        setLoading(true);
        const data = await searchMovies(query, page);
        return data
      } catch (error) {
        console.error("Error fetching search results:", error);
        setErrorSearch(error);
      } finally {
        setLoadingSearch(false);
      }
    }, [])


  return {
    loading,
    loadingDetails,
    loadingSearch,
    error,
    errorDetails,
    errorSearch,
    fetchMovies, 
    fetchMovieDetails,
    fetchSearchMovies
  };
}