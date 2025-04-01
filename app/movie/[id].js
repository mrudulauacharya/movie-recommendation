// /app/[id].js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const MovieDetailPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!id) return; // If no ID in URL, do nothing

    const fetchMovieDetails = async () => {
      const API_KEY = process.env.TMDB_API_KEY;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      setMovie(data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Release Date: {movie.release_date}</p>
      <p>{movie.overview}</p>
      <p>Genres: {movie.genres.map((g) => g.name).join(', ')}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetailPage;
