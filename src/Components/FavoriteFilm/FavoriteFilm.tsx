import React from 'react';
//import { Anime } from '../../Types/Anime';
import './FavoriteFilm.scss';


export const FavoriteFilm: React.FC = () => {

  return (
    <>
      <h2>Любиме Аніме</h2>
      {/* <ul className="favoriteFilm">
        {films.map(film => (
          <li key={film.id}>
            <div className="favoriteFilm__container">
              <img 
                src={`${film.imgUrl}`}
                alt={`${film.title}`}
                className="favoriteFilm__img"
              />
              <h2 className="favoriteFilm__title">{film.title}</h2>
              <span className='favoriteFilm__close'>
              </span>
            </div>
          </li>
        ))}
      </ul> */}
    </>
  );
}