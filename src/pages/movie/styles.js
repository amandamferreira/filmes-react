import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 3rem auto 4rem;
  padding: 2rem;
  background: linear-gradient(135deg, #fff0f6, #ffe6f0);
  border-radius: 1.8rem;
  box-shadow: 0 15px 40px rgba(214, 51, 108, 0.25);
  font-family: "Poppins", sans-serif;
  color: #6b2446;

  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem 1rem;
    margin: 2rem 1rem 3rem;
  }
`;

export const ImgMovie = styled.img`
  width: 280px;
  min-width: 280px;
  border-radius: 1.5rem;
  box-shadow: 0 8px 25px rgba(214, 51, 108, 0.35);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 14px 40px rgba(214, 51, 108, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    margin-bottom: 2rem;
  }
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: clamp(2rem, 5vw, 2.8rem);
  margin-bottom: 0.5rem;
  color: #9d174d;
`;

export const ReleaseDate = styled.h3`
  font-weight: 600;
  font-size: 1.15rem;
  color: #c44a76;
  margin-bottom: 2rem;
  font-style: italic;
`;

export const Descricao = styled.section`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #6b2446;
  text-align: justify;
  margin-bottom: 3rem;

  h4 {
    font-size: 1.75rem;
    color: #d6336c;
    margin-bottom: 1.2rem;
  }

  p {
    text-indent: 32px;
  }
`;

export const BtnBack = styled.button`
  align-self: flex-start;
  padding: 0.85rem 4rem;
  border-radius: 20px;
  border: none;
  background: linear-gradient(135deg, #ff8da1, #d6336c);
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 7px 20px rgba(214, 51, 108, 0.55);
  transition: background 0.3s ease, transform 0.25s ease, box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #d6336c, #ff8da1);
    transform: scale(1.08);
    box-shadow: 0 10px 25px rgba(214, 51, 108, 0.75);
  }
`;
