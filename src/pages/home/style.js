import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 1.5rem 4rem;
  background: linear-gradient(135deg, #fff0f6, #ffe6f0);
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  color: #6b2446;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 900;
  font-size: 3rem;
  color: #d6336c;
  text-shadow: 1px 1px 5px #f8bbd0;
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
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: 
    background-color 0.3s ease,
    color 0.3s ease,
    transform 0.25s ease;

  &:hover {
    background: #ff8da1;
    color: white;
    transform: scale(1.05);
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.8rem 2rem;
  padding: 0;
`;

export const Movie = styled.li`
  background: #ffe6f0;
  border-radius: 1.5rem;
  box-shadow: 0 7px 18px rgba(214, 51, 108, 0.18);
  padding: 1.2rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 14px 30px rgba(214, 51, 108, 0.35);
  }

  img {
    width: 180px;
    border-radius: 1.2rem;
    box-shadow: 0 6px 14px rgba(214, 51, 108, 0.3);
    margin-bottom: 1.5rem;
  }

  span {
    font-weight: 700;
    font-size: 1.2rem;
    color: #9d174d;
    text-align: center;
    margin-bottom: 1.2rem;
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
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 5px 14px rgba(214, 51, 108, 0.5);
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #d6336c, #ff8da1);
    transform: scale(1.1);
    box-shadow: 0 7px 18px rgba(214, 51, 108, 0.7);
  }
`;
