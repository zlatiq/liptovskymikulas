import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const GalleryWrapper = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;
`;

const GalleryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const GalleryTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #1e3a8a;
`;

const StyledCarousel = styled(Carousel)`
  .carousel .slide img {
    max-height: 600px;
    object-fit: cover;
  }
`;

const Gallery: React.FC = () => {
    return (
        <GalleryWrapper id="gallery">
            <GalleryContent>
                <GalleryTitle>Galéria</GalleryTitle>
                <StyledCarousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
                    <div>
                        <img src="https://example.com/liptovsky-mikulas-1.jpg" alt="Liptovský Mikuláš - Námestie" />
                        <p className="legend">Námestie Osloboditeľov</p>
                    </div>
                    <div>
                        <img src="https://example.com/liptovsky-mikulas-2.jpg" alt="Liptovský Mikuláš - Kostol" />
                        <p className="legend">Kostol sv. Mikuláša</p>
                    </div>
                    <div>
                        <img src="https://example.com/liptovsky-mikulas-3.jpg" alt="Liptovský Mikuláš - Príroda" />
                        <p className="legend">Okolité hory</p>
                    </div>
                    <div>
                        <img src="https://example.com/liptovsky-mikulas-4.jpg" alt="Liptovský Mikuláš - Aquapark" />
                        <p className="legend">Aquapark Tatralandia</p>
                    </div>
                </StyledCarousel>
            </GalleryContent>
        </GalleryWrapper>
    );
};

export default Gallery;