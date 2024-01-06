import './carouselCont.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './../../images/carousel/lion_boy.jpg';
import img2 from '../../images/carousel/donuts.jpg'
import img3 from '../../images/carousel/moon_bear.jpg'
import img4 from '../../images/carousel/astro.png'

const images = [
  { img: img3, alt : "bear"},
  { img: img2, alt : "donuts"},
  { img: img1, alt : "lion boy" },
  { img: img4, alt : "astro"}
];

function CarouselCont() {
  return (
    <Carousel className="custom-carousel">
      {images.map((item, index) => (
        <Carousel.Item key={index} interval={2000}>
          <img src={item.img} alt={item.alt} className="d-block w-100" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselCont;
