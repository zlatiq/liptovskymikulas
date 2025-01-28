import React from "react"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

// Import images
import image1 from "../assets/gallery/1.jpg"
import image2 from "../assets/gallery/2.jpg"
import image3 from "../assets/gallery/3.jpg"
import image4 from "../assets/gallery/4.jpg"

const GalleryWrapper = styled.section`
    padding: 4rem 0;
    background-color: #f8f9fa;
`

const GalleryContent = styled.div`
    max-width: 800px; // Zmenšená šírka galérie
    margin: 0 auto;
`

const GalleryTitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    color: #1466AC;
`

const StyledCarousel = styled(Carousel)`
    .carousel .slide img {
        max-height: 400px; // Zmenšená výška obrázkov
        object-fit: cover;
    }

    .legend {
        background: rgba(20, 102, 172, 0.8);
        font-size: 1rem;
        padding: 10px;
        margin-bottom: 40px;
        border-radius: 10px;
    }
`

const Gallery: React.FC = () => {
    const images = [
        { src: image1, alt: "Námestie osloboditeľov", legend: "Historické námestie s Kostolom sv. Mikuláša v pozadí" },
        { src: image2, alt: "Kostol sv. Mikuláša", legend: "Gotický Kostol sv. Mikuláša - symbol mesta" },
        { src: image3, alt: "Aquapark Tatralandia", legend: "Zábava a relax v Aquaparku Tatralandia" },
        { src: image4, alt: "Chopok", legend: "Majestátny výhľad na Chopok v Nízkych Tatrách" },
    ]

    return (
        <GalleryWrapper id="gallery">
            <GalleryContent>
                <GalleryTitle>Galéria</GalleryTitle>
                <StyledCarousel
                    showArrows={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={5000}
                    showStatus={false}
                >
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image.src || "/placeholder.svg"} alt={image.alt} />

                        </div>
                    ))}
                </StyledCarousel>
            </GalleryContent>
        </GalleryWrapper>
    )
}

export default Gallery