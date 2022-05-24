import React from 'react';
import './App.scss';
import { FilmList } from './Components/FilmList/FilmList';
import filmsFromServer from './api/films.json';


export const App: React.FC = React.memo(() => {
  return (
    <div className="App">
      <FilmList films={filmsFromServer} />
    </div>
  )
})

