import Carousel from 'react-bootstrap/Carousel';
import image from "../assets/images/crousal.jpg";

function HeroSection() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
        height={700}
          className="d-block w-100"
          src={image}
          alt='imagec'
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;