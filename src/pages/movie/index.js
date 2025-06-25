import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  ImgMovie,
  Title,
  ReleaseDate,
  Descricao,
  BtnBack,
  Info,
} from "./styles";

const Movie = () => {
  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [movie, setMovie] = useState(null);
  const KEY = process.env.REACT_APP_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      });
  }, [KEY, id]);

  if (!movie) {
    return (
      <Container>
        <h2 style={{textAlign: "center", color: "#d6336c", fontWeight: "700"}}>
          Carregando...
        </h2>
      </Container>
    );
  }

  return (
    <Container>
      <ImgMovie src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
      <Info>
        <Title>{movie.title}</Title>
        <ReleaseDate>Data de lançamento: {movie.release_date}</ReleaseDate>
        <Descricao>
          <h4>Descrição:</h4>
          <p>{movie.overview}</p>
        </Descricao>
        <Link to="/">
          <BtnBack>Voltar</BtnBack>
        </Link>
      </Info>
    </Container>
  );
};

export default Movie;
