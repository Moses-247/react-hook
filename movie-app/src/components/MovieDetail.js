// src/components/MovieDetail.js
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const history = useHistory();
  const movie = movies[id];

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <button onClick={() => history.push('/')}>Back to Home</button>
    </div>
  );
};

export default MovieDetail;
