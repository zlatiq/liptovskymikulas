import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import obrázkov
import lm1 from '../assets/lm1.jpg';
import lm2 from '../assets/lm2.jpg';
import lm4 from '../assets/lm4.png';
import lm5 from '../assets/lm5.jpg';
import lm6 from '../assets/lm6.jpg';
import lm7 from '../assets/lm7.jpg';

const HeroWrapper = styled.div`
  height: 80vh;
  position: relative;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: white;
  background-color: rgba(20, 102, 172, 0.75);
  padding: 2rem;
  border-radius: 10px;
  backdrop-filter: blur(5px);
`;

const HeroTitle = styled.h1`
  font-family: 'Urbanist', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
`;

const StyledCarousel = styled(Carousel)`
  height: 100%;

  .slide {
    height: 80vh;
  }

  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Hero: React.FC = () => {
    return (
        <HeroWrapper>
            <StyledCarousel
                infiniteLoop
                autoPlay
                interval={3000}
                transitionTime={1000}
                showStatus={false}
                showThumbs={false}
                showArrows={false}
            >
                <div>
                    <img src={lm1 || "/placeholder.svg"} alt="Liptovský Mikuláš 1" />
                </div>
                <div>
                    <img src={lm2 || "/placeholder.svg"} alt="Liptovský Mikuláš 2" />
                </div>
                <div>
                    <img src={lm4 || "/placeholder.svg"} alt="Liptovský Mikuláš 4" />
                </div>
                <div>
                    <img src={lm5 || "/placeholder.svg"} alt="Liptovský Mikuláš 5" />
                </div>
                <div>
                    <img src={lm6 || "/placeholder.svg"} alt="Liptovský Mikuláš 6" />
                </div>
                <div>
                    <img src={lm7 || "/placeholder.svg"} alt="Liptovský Mikuláš 7" />
                </div>
            </StyledCarousel>
            <HeroContent>
                <HeroTitle>Vitajte v Liptovskom Mikuláši</HeroTitle>
                <HeroSubtitle>Objavte krásy nášho mesta a jeho okolia</HeroSubtitle>
            </HeroContent>
        </HeroWrapper>
    );
};

export default Hero;