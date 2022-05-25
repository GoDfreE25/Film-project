import React, { useEffect, useState } from "react";
import { FilmCard } from "../FilmCard/FilmCard";
import './FilmList.scss';
import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { FavoriteFilm } from "../FavoriteFilm/FavoriteFilm";


export const FilmList: React.FC = () => {
  const [animeFromServer, setAnimeFromServer] = useState([]);
  const [searchedAnime, setSearchedAnime] = useState('');
  const [pages, setPages] = useState(6);
  const [idForFavorrite, setIdForFavorite] = useState(0);
  console.log(idForFavorrite);
  

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedAnime(event.target.value)
  };

  const query = `
  {
  Page(page: 1, perPage: ${pages}) {
      media(search: "${searchedAnime}") {
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
      .then(data => setAnimeFromServer(data.data.Page.media));
}, [query])

  return (
    <>
    <div className="container">
      <div className="film">
        <h2>Список Аніме</h2>
        <input
          type="search"
          id="search-query"
          className="film__input"
          placeholder="Type searched anime"
          value={searchedAnime}
          onChange={handleChange}
        />
        <ul className="film__list">
          {animeFromServer.map((anime: any) => (
            <li key={anime?.id}>
              <FilmCard anime={anime} setId={setIdForFavorite} />
            </li>
          ))
            
           }
        </ul>
      </div>
      <Button 
        variant="contained" 
        endIcon={<ArrowCircleRightIcon />}
        onClick={() => setPages(pages + 6)}
      >
        More
      </Button>
      <FavoriteFilm />
    </div>
    
    </>
    
  )
}