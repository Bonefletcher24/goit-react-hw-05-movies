// src/components/Home/Home.jsx
import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/api';
import MovieList from '../MovieList/MovieList';
import styles from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
