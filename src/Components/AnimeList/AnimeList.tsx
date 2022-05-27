import React, { useCallback, useEffect, useState } from "react";
import { AnimeCard } from "../AnimeCard/AnimeCard";
import './AnimeList.scss';
import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { FavoriteAnime } from "../FavoriteAnime/FavoriteAnime";
import { Anime } from "../../Types/Anime";
import debounce from 'lodash.debounce';


export const AnimeList: React.FC = () => {
  const [animeFromServer, setAnimeFromServer] = useState([]);
  const [searchedAnime, setSearchedAnime] = useState<string>('');
  const [pages, setPages] = useState<number>(3);
  const [idForFavorite, setIdForFavorite] = useState<number>(0);
  const [favorritsIdsList, setFavoritsIdsList] = useState<number[]>([]);

  useEffect(() => {
    setFavoritsIdsList(curentAnime => [...curentAnime, idForFavorite])
  }, [idForFavorite])

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedAnime(event.target.value)
  };

  console.log(searchedAnime);
  

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
      .then(data => setAnimeFromServer(data.data.Page.media))
}, [query]);

const debouncedChangeHandler = useCallback(
  debounce(handleChange, 500)
, []);

  return (
    <>
    <div className="container">
      <div className="anime">
        <h2>Список Аніме</h2>
        <input
          type="search"
          id="search-query"
          className="anime__input"
          placeholder="Type searched anime"
          onChange={debouncedChangeHandler}
        />
        <ul className="anime__list">
          {animeFromServer.map((anime: Anime) => (
            <li key={anime.id}>
              <AnimeCard 
                anime={anime} 
                setId={setIdForFavorite} 
              />
            </li>
          ))
            
           }
        </ul>
      </div>
      <Button 
        variant="contained" 
        endIcon={<ArrowCircleRightIcon />}
        onClick={() => setPages(pages + 3)}
      >
        More
      </Button>
      <FavoriteAnime 
        filmsIds={favorritsIdsList}
        setFilmsId={setFavoritsIdsList}
      />
    </div>
    
    </>
    
  )
}