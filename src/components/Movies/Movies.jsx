import React, { useState } from "react";
import { fetchMoviesByQuery } from "services/api";
import { Link } from "react-router-dom";
import css from './Movies.module.css';

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
  
    const handleSearch = async () => {
      const results = await fetchMoviesByQuery(query);
      setMovies(results);
    };
  
    return (
      <div className={css.movies}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default Movies;
