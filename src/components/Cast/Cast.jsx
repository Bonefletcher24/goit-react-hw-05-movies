import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import css from './Cast.module.css';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
  
    useEffect(() => {
      fetchMovieCredits(movieId).then(setCast);
    }, [movieId]);
  
    return (
      <div className={css.cast}>
        <h2>Cast</h2>
        <ul>
          {cast.map(actor => (
            <li key={actor.cast_id}>{actor.name} as {actor.character}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default Cast;