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
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw new Error('Erro ao buscar filmes', { cause: error });
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await tmdbAPI.get(`/movie/${id}?language=pt-BR`);
    console.log('Movie details response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw new Error('Erro ao buscar detalhes do filme', { cause: error });
  }
};