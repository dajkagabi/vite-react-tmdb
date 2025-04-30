import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (!movie) {
    return <div className="text-center text-xl">Movie not found</div>;
  }

  return (
    <div className="p-4 flex flex-col md:flex-row gap-6">
      {/* Bal oldali kép */}
      <div className="flex-shrink-0">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Jobb oldali leírás */}
      <div className="flex-grow">
        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
        <p className="text-gray-400 mb-4">{movie.overview}</p>
        <p className="text-sm text-gray-500">
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Rating:</strong> ⭐ {movie.vote_average} / 10
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;