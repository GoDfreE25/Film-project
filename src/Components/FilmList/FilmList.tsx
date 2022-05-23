import React from "react";
import { Films } from "../../Types/Film";
import { FilmCard } from "../FilmCard/FilmCard";


type Props = {
  films: Films[];
}

export const FilmList: React.FC<Props> = ({ films }) => {
  return (
    <div className="filmList">
      <ul>
        {films.map(film => (
          <li key={film.id}>
             <FilmCard {...film} />
          </li>
        ))}
      </ul>
    </div>
  )
}