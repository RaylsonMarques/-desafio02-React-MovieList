import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';
import { GenreResponseProps } from './interfaces/GenreResponseProps';
import { MovieProps } from './interfaces/MovieProps';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';



export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => setMovies(response.data));
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => setSelectedGenre(response.data));
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        id={selectedGenreId}
        handleClickButton={handleClickButton}
      />

      <Content
        title={selectedGenre.title}
        movies={movies}
      />
    </div>
  )
}