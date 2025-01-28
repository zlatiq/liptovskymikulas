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
  color: #1466AC;
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
                        <img
                            src="https://images.unsplash.com/photo-1589554506284-48c18d091dc1"
                            alt="Námestie osloboditeľov v Liptovskom Mikuláši"
                        />
                        <p className="legend">Námestie osloboditeľov</p>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1589554506284-48c18d091dc2"
                            alt="Kostol sv. Mikuláša"
                        />
                        <p className="legend">Kostol sv. Mikuláša</p>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1589554506284-48c18d091dc3"
                            alt="Aquapark Tatralandia"
                        />
                        <p className="legend">Aquapark Tatralandia</p>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1589554506284-48c18d091dc4"
                            alt="Panoráma Chopku"
                        />
                        <p className="legend">Nízke Tatry - Chopok</p>
                    </div>
                </StyledCarousel>
            </GalleryContent>
        </GalleryWrapper>
    );
};

export default Gallery;