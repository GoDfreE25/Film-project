import React, { useEffect, useState } from 'react';
import { Anime } from '../../Types/Anime';
import './FavoriteAnime.scss';

interface Props {
  filmsIds: number[];
}

export const FavoriteFilm: React.FC<Props> = ({ filmsIds }) => {
  const [favoriteAnime, setFavoriteAnime] = useState<Anime[]>([]);

  const query = `
  {
  Page(page: 1) {
      media(id_in: [${filmsIds.map(film => film.toString())}]) {
        bannerImage
        title {
          english
          native
        }
      }
  }
}
`;

useEffect(() => {
  fetch('https://graphql.anilist.co',
    {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      body: JSON.stringify({
          query: query,
      })
    }).then(response => response.json())
      .then(data => setFavoriteAnime(data.data.Page.media));
}, [query])

  return (
    <>
      <h2>Любиме Аніме</h2>
      <ul className="favoriteFilm">
        {favoriteAnime.map((anime: Anime) => (
          <li key={anime.id}>
            <div className="favoriteFilm__container">
              <img 
                src={`${anime.bannerImage}`}
                alt={`${anime.title.english}`}
                className="favoriteFilm__img"
              />
              <h2 className="favoriteFilm__title">{anime.title.english}</h2>
              <span className='favoriteFilm__close'>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}