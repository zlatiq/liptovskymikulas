import type React from "react"
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
  max-width: 1200px;
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
    max-height: 600px;
    object-fit: cover;
  }
`

const Gallery: React.FC = () => {
    const images = [
        { src: image1, alt: "Námestie osloboditeľov v Liptovskom Mikuláši", legend: "Kostol sv. Mikuláša" },
        { src: image2, alt: "Kostol sv. Mikuláša", legend: "Budova spolku Tatrín" },
        { src: image3, alt: "Aquapark Tatralandia", legend: "Nízke Tatry - Chopok" },
        { src: image4, alt: "Panoráma Chopku", legend: "Liptovská Mara" },
    ]

    return (
        <GalleryWrapper id="gallery">
            <GalleryContent>
                <GalleryTitle>Galéria</GalleryTitle>
                <StyledCarousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image.src || "/placeholder.svg"} alt={image.alt} />
                            <p className="legend">{image.legend}</p>
                        </div>
                    ))}
                </StyledCarousel>
            </GalleryContent>
        </GalleryWrapper>
    )
}

export default Gallery

