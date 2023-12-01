import './home.css';
import { FaHandHoldingHeart } from "react-icons/fa";
import { BsBalloonHeart } from "react-icons/bs";
import { PiPlant } from "react-icons/pi";
import SlideShow from '../../components/slideShow/slideShow'

const Home = () => {
  return (
    <>
      <div className="hero flex_center"> 
        </div>
        <div id="about_us" className="col flex_center standard_padding">
          <h2 className="header__1">About Us</h2>
          <p className='text__style_1' >Baking Horizon is a family-owned business nestled in Milton, dedicated to crafting exquisite custom cakes. From birthdays to weddings, we cater to all your special occasions. Explore a wide array of flavors and styles, and let us create a uniquely personalized cake for your celebration. With a passion for baking and a commitment to quality, we take pride in turning your dream cake into a delicious reality.</p>
        </div>
        <div id="tri_highlights" className='standard_padding row colorA'>
          <div className='flex_center col'>
            <PiPlant size={40}/>
            <h4 className='text__style_2 highlight_header' >Fresh Ingredients</h4>
            <p className='text__style_1' >We are dedicated to using only the freshest and highest-quality ingredients. We can ensure you that all our products are Halal certified</p>
          </div>
          <div className='flex_center col'>
            <FaHandHoldingHeart size={40}/>
            <h4 className='text__style_2'>Handmade with Love</h4>
            <p className='text__style_1'>Every cake we create is a labor of love. We pour our  passion and creativity into each cake, ensuring that your cake is made with care and attention to detail.</p>
          </div>
          <div className='flex_center col'>
            <BsBalloonHeart size={40}/>
            <h4 className='text__style_2' >Health-Certified</h4>
            <p className='text__style_1'>Our home-based business features a Halton Health certified kitchen that upholds high standards of cleanliness and health.</p>
          </div>
        </div>
      <SlideShow></SlideShow>
    </>
  );
};

export default Home;