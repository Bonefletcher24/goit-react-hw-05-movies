import React, { useEffect, useState} from "react";
import { useParams, Link, Route, Navigate, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from "services/api";
import css from './MovieDetails.module.css'
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const navigate = useNavigate(); // Хук для програмн навигации
  
    const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      fetchMovieDetails(movieId).then(setMovie);
    }, [movieId]);
  
    if (!movie) {
      return null; // Можно добавить загрузочный индикатор
    }
  
    return (
      <div className={css.movieDetails}>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <ul>
          <li><Link to={`/movies/${movieId}/cast`}>Cast</Link></li>
          <li><Link to={`/movies/${movieId}/reviews`}>Reviews</Link></li>
        </ul>
  
        {/* Используем Routes для вложенных маршрутов */}
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
  
        {/* Обработка навигации, если нет соответствующего подмаршрута */}
        <Route path="*" element={<Navigate to="/movies" replace />} />
      </div>
    );
  };