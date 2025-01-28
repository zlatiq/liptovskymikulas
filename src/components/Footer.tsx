import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterWrapper = styled.footer`
    background-color: #1e3a8a;
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
    margin-bottom: 1rem;
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
                            <h3>Mesto Liptovský Mikuláš</h3>
                            <p>Štúrova 1989/41, 031 42 Liptovský Mikuláš</p>
                            <p>Tel: +421 44 556 5111</p>
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