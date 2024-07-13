// src/components/Cast/Cast.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/api';
import styles from './Cast.module.css';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2>Cast</h2>
      <div className={styles.castList}>
        {cast.map(actor => (
          <div key={actor.id} className={styles.actor}>
            <img
              src={actor.profile_path ? `${BASE_IMAGE_URL}${actor.profile_path}` : 'https://via.placeholder.com/300'}
              alt={actor.name}
              className={styles.actorImage}
            />
            <p className={styles.actorName}>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
