import { useEffect, useState } from "react";
import { Container, Title, FilterContainer, GenreButton, MovieList, Movie, Btn } from "./style";
import { Link } from "react-router-dom";

const genresList = [
  { id: 28, name: "Ação" },
  { id: 35, name: "Comédia" },
  { id: 18, name: "Drama" },
  { id: 27, name: "Terror" },
  { id: 10749, name: "Romance" },
  { id: 16, name: "Animação" }
];

function Home() {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const KEY = process.env.REACT_APP_KEY;

  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    if (selectedGenre === null) {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    } else {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=${selectedGenre}&language=pt-BR`)
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    }
  }, [KEY, selectedGenre]);

  return (
    <Container>
      <Title>Filmes</Title>

      <FilterContainer>
        <GenreButton active={selectedGenre === null} onClick={() => setSelectedGenre(null)}>
          Todos
        </GenreButton>

        {genresList.map((genre) => (
          <GenreButton
            key={genre.id}
            active={selectedGenre === genre.id}
            onClick={() => setSelectedGenre(genre.id)}
          >
            {genre.name}
          </GenreButton>
        ))}
      </FilterContainer>

      <MovieList>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Movie key={movie.id}>
              <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
              <span>{movie.title}</span>
              <Link to={`/${movie.id}`}>
                <Btn>Detalhes</Btn>
              </Link>
            </Movie>
          ))
        ) : (
          <p style={{ gridColumn: '1/-1', textAlign: 'center' }}>Nenhum filme encontrado.</p>
        )}
      </MovieList>
    </Container>
  );
}

export default Home;
