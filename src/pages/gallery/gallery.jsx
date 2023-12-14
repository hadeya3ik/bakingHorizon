import './gallery.css'
import { cupcakeData, dholkiData, floralData, babyShowerData, charactersData, kidsData, signatureData, data } from './galleryData.jsx' 
import { useState } from 'react';
import Modal from 'react-modal'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CloseButton from 'react-bootstrap/CloseButton';

const filterItems = [
  { data: signatureData, text: "signature" },
  { data: babyShowerData, text: "baby showers" },
  { data: floralData, text: "floral" },
  { data: kidsData, text: "kids" },
  { data: charactersData, text: "characters" },
  { data: dholkiData, text: "dholki" },
  { data: cupcakeData, text: "cupcakes" },
  { data: data, text: "etc" }
];

const Gallery = () => {
  const [filter, setFilter] = useState('signature');
  const [animate, setAnimate] = useState(true);

  // sets the filter + animation
  function handleFilter(new_filter) {
    if (new_filter !== filter) { 
      setAnimate(false); 
      setTimeout(() => {
        setFilter(new_filter); 
        setAnimate(true);
      }, 5); // Short timeout to ensure the class is re-applied
    }
  }

  const filteredData = filterItems.filter((item) => item.text == filter)[0].data;

  return (
    <div className="flex_center col">
      <div className="flex_center col">
        <h className="page_heading">Gallery</h>
      </div>
      <div>
        <ul id="filter" className='text__style_3 flex_center'>
          {filterItems.map((item) => (<li onClick={()=>handleFilter(item.text)} 
          className={item.text == filter ? "active" : ""} key={item.data}> {item.text} </li>))}
        </ul>
      </div>
      <div id="gallery">
  {filteredData.map(item => (
    <img
      key={item.id}
      src={item.img}
      alt={`Image ${item.id}`}
      className={animate ? 'animate' : ''}
    />
  ))}
</div>
    </div>
  );
}

export default Gallery;