import React from 'react';
import { useHistory } from 'react-router-dom';

const MovieCard = ({ movie, index }) => {
  const history = useHistory();

  return (
    <div className="movie-card" onClick={() => history.push(`/movie/${index}`)}>
      <img src={movie.posterURL} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
