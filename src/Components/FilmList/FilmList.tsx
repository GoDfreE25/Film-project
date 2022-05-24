import React from "react";
import { Films } from "../../Types/Film";
import { FilmCard } from "../FilmCard/FilmCard";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './FilmList.scss';
import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { FavoriteFilm } from "../FavoriteFilm/FavoriteFilm";

type Props = {
  films: Films[];
}

export const FilmList: React.FC<Props> = ({ films }) => {
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
          options={films.map((option) => option.title)}
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
          {films.map(film => (
            <li key={film.id}>
              <FilmCard {...film} />
            </li>
          ))}
        </ul>
      </div>
      <Button variant="contained" endIcon={<ArrowCircleRightIcon />}>
        More
      </Button>
      <FavoriteFilm films={films} />
    </div>
    
    </>
    
  )
}