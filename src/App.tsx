import React from 'react';
import './App.scss';
import { FilmList } from './Components/FilmList/FilmList';



export const App: React.FC = React.memo(() => {

  return (
    <div className="App">
      <FilmList />
    </div>
  )
})

