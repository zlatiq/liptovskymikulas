import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  background-image: url('https://example.com/liptovsky-mikulas-hero.jpg');
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 10px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
`;

const Hero: React.FC = () => {
    return (
        <HeroWrapper>
            <HeroContent>
                <HeroTitle>Vitajte v Liptovskom Mikuláši</HeroTitle>
                <HeroSubtitle>Objavte krásy nášho mesta a jeho okolia</HeroSubtitle>
            </HeroContent>
        </HeroWrapper>
    );
};

export default Hero;