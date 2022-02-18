import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie) => {
          return (
            <div>
              <p>
                {movie.title}<br/>
                {movie.time}
                <ul>
                  {movie.genres.map((genre) => {
                    return (
                      <li>{genre}</li>
                    );
                  })}
                </ul>
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Movies;
