import React from 'react';
import { HeaderContainer, Logo, Nav, NavLink } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>AmandaMovies</Logo>
      <Nav>
        <NavLink href="#">Início</NavLink>
        <NavLink href="#">Favoritos</NavLink>
        <NavLink href="#">Contato</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
