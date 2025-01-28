import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Import loga

const FooterWrapper = styled.footer`
  background-color: #1466AC;
  color: white;
  padding: 2rem 0;
`;

const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const FooterInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;
`;

const LogoImage = styled.img`
    height: 120px;
    width: auto;
    filter: brightness(0) invert(1); // Pre biele logo na modrom pozadí
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
`;

const SocialLink = styled.a`
    color: white;
    font-size: 1.5rem;

    &:hover {
        color: #f0f0f0;
    }
`;

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterInfo>
                    <LogoImage src={logo} alt="Logo mesta Liptovský Mikuláš" />
                    <div>
                        <h3>Mesto Liptovský Mikuláš</h3>
                        <p>Štúrova 1989/41, 031 42 Liptovský Mikuláš</p>
                        <p>Tel: +421 44 556 5111</p>
                    </div>
                </FooterInfo>
                <SocialLinks>
                    <SocialLink href="https://www.facebook.com/liptovskymikulas" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </SocialLink>
                    <SocialLink href="https://www.instagram.com/liptovskymikulas" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </SocialLink>
                    <SocialLink href="https://twitter.com/liptovskymikulas" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </SocialLink>
                    <SocialLink href="mailto:info@mikulas.sk">
                        <FaEnvelope />
                    </SocialLink>
                </SocialLinks>
            </FooterContent>
        </FooterWrapper>
    );
};

export default Footer;