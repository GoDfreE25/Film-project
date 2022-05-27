import React, { useEffect, useState } from 'react';
import { Anime } from '../../Types/Anime';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import './FavoriteAnime.scss';

interface Props {
  filmsIds: number[];
  setFilmsId: ([v]: number[]) => void;
}

export const FavoriteAnime: React.FC<Props> = ({ filmsIds, setFilmsId }) => {
  const [favoriteAnime, setFavoriteAnime] = useState<Anime[]>([]);
 
  const deleteAnime = (animeId: number) => {
    setFavoriteAnime(favoriteAnime.filter(animeF => animeF.id !== animeId));
    setFilmsId(filmsIds.filter(id => id !== animeId));
  };

  const query = `
  {
  Page(page: 1) {
      media(id_in: [${filmsIds.map(film => film.toString())}]) {
        id
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
}, [query]);

  console.log()

  return (
    <>
      <h2>Любиме Аніме</h2>
      <ul className="favoriteAnime">
        {favoriteAnime.map((anime: Anime) => (
          <li key={anime.id}>
            <div className="favoriteAnime__container">
              <img 
                src={`${anime.bannerImage}`}
                alt={`${anime.title.english}`}
                className="favoriteAnime__img"
              />
              <h2 className="favoriteAnime__title">{anime.title.english}</h2>
              <div className='favoriteAnime__close'>
              <IconButton
                style={{padding: 0}}
                aria-label="favorite" 
                size="large"
                className='favoriteAnime__close-icon'
                onClick={() => deleteAnime(anime.id)}
              >
                <CloseIcon />
              </IconButton>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}