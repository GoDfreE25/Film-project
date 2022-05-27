import React from 'react';
import './App.scss';
import { AnimeList } from './Components/AnimeList/AnimeList';



export const App: React.FC = React.memo(() => {

  return (
    <div className="App">
      <AnimeList />
    </div>
  )
})

