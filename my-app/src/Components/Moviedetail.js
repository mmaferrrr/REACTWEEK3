import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=b77a5026`);
        const data = await response.json(); // Get the JSON data
        setMovie(data);
      } catch (error) {
        setError('Failed to fetch movie details');
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <h1>{movie.Title}</h1>
          <p>{movie.Plot}</p>
          {movie.Poster && <img src={movie.Poster} alt={movie.Title} />}
        </>
      )}
    </div>
  );
};

export default MovieDetail;
