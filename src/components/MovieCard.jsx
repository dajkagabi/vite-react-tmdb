import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
      <img src={imageUrl} alt={movie.title} className="w-full h-72 object-cover" />
      <div className="p-2">
        <Link to={`/movie/${movie.id}`}>
          <h2 className="text-sm font-semibold hover:underline">{movie.title}</h2>
        </Link>
        <p className="text-xs text-gray-400">⭐ {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;