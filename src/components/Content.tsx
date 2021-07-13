import { MovieProps } from "../interfaces/MovieProps";
import { MovieCard } from './MovieCard';

interface ContentProps {
  title: string;
  movies: Array<MovieProps>;
}

export function Content(props: ContentProps) {
  // Complete aqui
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {props.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}