// src/components/MovieDetails/MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import styles from './MovieDetails.module.css';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';


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
        <button className={styles.goBackButton} onClick={() => navigate(location.state?.from ?? '/')}>Go back</button>
        <div className={styles.details}>
          <img src={`${BASE_IMAGE_URL}${movie.poster_path}`} alt={movie.title} className={styles.poster} />
          <div className={styles.info}>
            <h1>{movie.title}</h1>
            <p>User Score: {movie.vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
        <nav className={styles.navigation}>
          <Link to="cast" className={styles.buttonLink} state={{ from: location.state?.from }}>Cast</Link>
          <Link to="reviews" className={styles.buttonLink} state={{ from: location.state?.from }}>Reviews</Link>
        </nav>
        <div className={styles.outletContainer}>
          <Outlet />
        </div>
      </div>
    );
  };
  
  export default MovieDetails;