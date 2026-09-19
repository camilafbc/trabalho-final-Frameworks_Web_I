import axios from 'axios';

const APIKEY = import.meta.env.VITE_TMDB_API_KEY;


 const tmdbAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${APIKEY}`,
  },
});

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await tmdbAPI.get(`/movie/popular?language=pt-BR`, { params: { page } });
    console.log('Popular movies response:', response); // Log the response data
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};