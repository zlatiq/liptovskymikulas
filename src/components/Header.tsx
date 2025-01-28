// Header.tsx
import React from 'react';
import styled from 'styled-components';
import { FaHome, FaInfoCircle, FaCamera, FaMapMarkedAlt } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Import loga z assets

const HeaderWrapper = styled.header`
    background-color: #1466AC;
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

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

const LogoImage = styled.img`
    height: 80px;
    width: auto;
    filter: brightness(0) invert(1); // Pre biele logo na modrom pozadí
`;

const LogoText = styled.h1`
    font-family: 'Urbanist', sans-serif;
    font-weight: 600;
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
                <Logo>
                    <LogoImage src={logo} alt="Logo mesta Liptovský Mikuláš" />
                    <LogoText>Liptovský Mikuláš</LogoText>
                </Logo>
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