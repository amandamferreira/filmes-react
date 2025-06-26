import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 8vw 6rem; /* mais espaço nas laterais */
  background: linear-gradient(135deg, #fff0f6, #ffe6f0);
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  color: #6b2446;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 1.5rem 0 3.5rem; /* só um espacinho em cima */
  font-weight: 900;
  font-size: 2.8rem;
  color: #d6336c;
  text-shadow: 1px 1px 4px #f8bbd0;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem 1.2rem;
  margin-bottom: 3rem;
`;

export const GenreButton = styled.button`
  background: ${(props) => (props.active ? '#d6336c' : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : '#d6336c')};
  border: 2px solid #d6336c;
  border-radius: 25px;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ff8da1;
    color: white;
    transform: scale(1.05);
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* fixa 5 por linha */
  max-width: 1200px; /* centraliza tudo */
  margin: 0 auto;
  gap: 2rem 1.2rem;
  padding: 0;
`;

export const Movie = styled.li`
  background: #ffe6f0;
  border-radius: 1.2rem;
  box-shadow: 0 6px 18px rgba(214, 51, 108, 0.2);
  padding: 1.2rem 0.8rem 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 22px rgba(214, 51, 108, 0.3);
  }

  img {
    width: 140px;
    border-radius: 1rem;
    box-shadow: 0 5px 12px rgba(214, 51, 108, 0.25);
    margin-bottom: 1rem;
  }

  span {
    font-weight: 700;
    font-size: 1.05rem;
    color: #9d174d;
    text-align: center;
    margin-bottom: 0.8rem;
  }

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
`;

export const Btn = styled.button`
  padding: 0.8rem 3rem;
  border: none;
  border-radius: 15px;
  color: #fff;
  background: linear-gradient(135deg, #ff8da1, #d6336c);
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(214, 51, 108, 0.5);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #d6336c, #ff8da1);
    transform: scale(1.05);
  }
`;
