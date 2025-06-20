import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Nav,
  Container,
  ImgMovie,
  Title,
  ReleaseDate,
  Descricao,
  BtnBack,
} from "./styles";

const Movie = () => {
  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [movie, setMovie] = useState(null);
  const KEY = process.env.REACT_APP_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const filme = data.results.find((item) => item.id === Number(id));
        setMovie(filme);
      });
  }, [KEY, id]);

  if (!movie) {
    return (
      <Container>
        <Nav>
          <h1>Carregando...</h1>
        </Nav>
      </Container>
    );
  }

  return (
    <>
      <Nav>
        <h1>Movie</h1>
      </Nav>
      <Container>
        <ImgMovie src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
        <Title>{movie.title}</Title>
        <ReleaseDate>Data de lançamento: {movie.release_date}</ReleaseDate>
        <Descricao>
          <h4>Descrição:</h4>
          <p>{movie.overview}</p>
        </Descricao>
        <Link to="/">
          <BtnBack>Voltar</BtnBack>
        </Link>
      </Container>
    </>
  );
};

export default Movie;
