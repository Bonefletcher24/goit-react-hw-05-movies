// src/components/MovieDetails/MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      getMovieDetails(movieId).then(setMovie);
    }, [movieId]);
  
    if (!movie) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className={styles.container}>
        <button onClick={() => navigate(location.state?.from ?? '/')}>Go back</button>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <nav className={styles.navigation}>
          <Link to="cast" state={{ from: location.state?.from }}>Cast</Link>
          <Link to="reviews" state={{ from: location.state?.from }}>Reviews</Link>
        </nav>
        <div className={styles.outletContainer}>
          <Outlet />
        </div>
      </div>
    );
  };
  
  export default MovieDetails;