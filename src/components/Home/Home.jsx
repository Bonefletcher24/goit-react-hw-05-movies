import React, { useEffect, useState} from 'react';
import { fetchTrendingMovies } from 'services/api';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

export const Home = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      fetchTrendingMovies().then(setMovies);
    }, []);
  
    return (
      <div className={css.home}>
        <h1>Trending Movies</h1>
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