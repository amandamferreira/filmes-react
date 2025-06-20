import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 25px 0 40px;
  background: #fff0f6;
  box-shadow: 0 3px 10px rgba(214, 51, 108, 0.12);

  h1 {
    color: #d6336c;
    font-weight: 900;
    font-size: 2.8rem;
    text-shadow: 1px 1px 5px #f8bbd0;
  }
`;

export const Container = styled.div`
  max-width: 720px;
  margin: 0 auto 3rem;
  padding: 0 1rem 4rem;
  background: linear-gradient(135deg, #ffe6f0, #fff0f6);
  border-radius: 1.5rem;
  box-shadow: 0 12px 30px rgba(214, 51, 108, 0.25);
  font-family: 'Poppins', sans-serif;
  color: #6b2446;
`;

export const ImgMovie = styled.img`
  display: block;
  width: 220px;
  margin: 0 auto 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 7px 20px rgba(214, 51, 108, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 35px rgba(214, 51, 108, 0.45);
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 2.4rem;
  margin-bottom: 0.2rem;
  text-align: center;
  color: #9d174d;
`;

export const ReleaseDate = styled.h3`
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #c44a76;
`;

export const Descricao = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: justify;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #6b2446;

  h4 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: #d6336c;
  }

  p {
    text-indent: 30px;
  }
`;

export const BtnBack = styled.button`
  display: block;
  margin: 3rem auto 0;
  padding: 0.8rem 3.5rem;
  border-radius: 15px;
  border: none;
  background: linear-gradient(135deg, #ff8da1, #d6336c);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(214, 51, 108, 0.5);
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #d6336c, #ff8da1);
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(214, 51, 108, 0.7);
  }
`;
