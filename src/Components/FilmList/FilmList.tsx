import React, { useEffect, useState } from "react";
import { Anime } from "../../Types/Anime";
import { FilmCard } from "../FilmCard/FilmCard";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './FilmList.scss';
import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { FavoriteFilm } from "../FavoriteFilm/FavoriteFilm";


export const FilmList: React.FC = () => {
  const [animeFromServer, setAnimeFromServer] = useState([]);
  const query = `
  {
  Page(page: 1, perPage: 6) {
      media(search: "seven deadly") {
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
        <Autocomplete
          style={{width: "550px", margin: "auto"}}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={animeFromServer.map((option: Anime) => option?.title.english)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
        <ul className="film__list">
          {animeFromServer.map((anime: any) => (
            <li key={anime?.id}>
              <FilmCard {...anime} />
            </li>
          ))
            
           }
        </ul>
      </div>
      <Button variant="contained" endIcon={<ArrowCircleRightIcon />}>
        More
      </Button>
      <FavoriteFilm />
    </div>
    
    </>
    
  )
}