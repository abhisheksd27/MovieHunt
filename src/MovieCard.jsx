import React from 'react';

const MovieCard = ({ movie1 }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie1.Year}</p>
      </div>
      <div>
        <img src={movie1.Poster !== "N/A" ? movie1.Poster : "https://via.placeholder.com/400"} alt={movie1.Title} />
      </div>
      <div>
        <span>{movie1.Type}</span>
        <h2>{movie1.Title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
