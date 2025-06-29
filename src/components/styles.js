import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #fff0f6, #ffe6f0);
  font-family: 'Poppins', sans-serif;
  color: #6b2446;
  padding: 6rem 1.5rem 0; /* espaço extra no topo p/ header fixa */
`;

export const Content = styled.main`
  flex: 1;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 900;
  font-size: 3.5rem;
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
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.25s ease;

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

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: linear-gradient(90deg, #a0003b, #d6336c);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.h1`
  font-size: 1.6rem;
  color: #fff;
  font-weight: 700;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: #ffdce6;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: #ffdce6;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
  margin-top: auto;

  p {
    margin: 0;
    color: #d6336c;
    font-weight: 600;
  }
`;

