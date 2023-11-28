import React from 'react';
import './home.css';
import { FaHandHoldingHeart } from "react-icons/fa";
import { BsBalloonHeart } from "react-icons/bs";
import { PiPlant } from "react-icons/pi";
import SlideShow from '../../components/slideShow/slideShow'

const Home = () => {
  return (
    <>
      <div className="hero"> 
      </div>
      <div className="about-us">
        <h2>About Us</h2>
        <p>Baking Horizon is a family-owned business nestled in Milton, dedicated to crafting exquisite custom cakes. From birthdays to weddings, we cater to all your special occasions. Explore a wide array of flavors and styles, and let us create a uniquely personalized cake for your celebration. With a passion for baking and a commitment to quality, we take pride in turning your dream cake into a delicious reality.</p>
      </div>
      <div className='info'>
        <div className='bullet'>
          <PiPlant size={40}/>
          <h4>Fresh Ingredients</h4>
          <p>We are dedicated to using only the freshest and highest-quality ingredients. We can ensure you that all our products are Halal certified</p>
        </div>
        <div className='bullet'>
          <FaHandHoldingHeart size={40}/>
          <h4>Handmade with Love</h4>
          <p>Every cake we create is a labor of love. We pour our  passion and creativity into each cake, ensuring that your cake is made with care and attention to detail.</p>
        </div>
        <div className='bullet'>
          <BsBalloonHeart size={40}/>
          <h4>Health-Certified Kitchen</h4>
          <p>Our home-based business features a Halton Health certified kitchen that upholds the highest standards of cleanliness and health.</p>
        </div>
      </div>
      <SlideShow></SlideShow>
    </>
  );
};

export default Home;