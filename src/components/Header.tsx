import React from 'react';
import styled from 'styled-components';
import { FaHome, FaInfoCircle, FaCamera, FaMapMarkedAlt } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  background-color: #1e3a8a;
  color: white;
  padding: 1rem 0;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <Nav>
                <Logo>Liptovský Mikuláš</Logo>
                <NavLinks>
                    <li><NavLink href="#"><FaHome /> Domov</NavLink></li>
                    <li><NavLink href="#about"><FaInfoCircle /> O meste</NavLink></li>
                    <li><NavLink href="#attractions"><FaMapMarkedAlt /> Atrakcie</NavLink></li>
                    <li><NavLink href="#gallery"><FaCamera /> Galéria</NavLink></li>
                </NavLinks>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;