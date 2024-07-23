import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=b77a5026`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch {
      setError('Failed to fetch movies');
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <input type="text" value={query} onChange={handleSearch} />
      <button onClick={fetchMovies} disabled={loading}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              {movie.Poster && <img src={movie.Poster} alt={movie.Title} />}
              {movie.Title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
