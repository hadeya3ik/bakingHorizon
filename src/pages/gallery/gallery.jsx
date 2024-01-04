import './gallery.css'
import { cupcakes, dholki, floral, baby_shower, characters, kids, signature } from '../../scripts/test.jsx' 
//import { cupcakes, dholki, florall, baby_shower, characters, kids, signature } from './galleryData' 
import { useState } from 'react';
import Modal from '../../components/modal/Modal'

const filterItems = [
  { data: baby_shower, text: "baby showers" },
  { data: signature, text: "signature" },
  { data: floral, text: "floral" },
  { data: kids, text: "kids" },
  { data: characters, text: "characters" },
  { data: dholki, text: "dholki" },
  { data: cupcakes, text: "cupcakes" },
];

const Gallery = () => {
  const [filter, setFilter] = useState('signature');
  const [animate, setAnimate] = useState(true);
  const [modalOpen, setModal] = useState(false);
  const [currPos, setPos] = useState(0);

  function handleFilter(new_filter) {
    if (new_filter !== filter) { 
      setAnimate(false); 
      setTimeout(() => {
        setFilter(new_filter); 
        setAnimate(true);
      }, 5);
    }
  }
  
  let filteredData = filterItems.filter((item) => item.text == filter)[0].data;
  let maxPos = filteredData.length;
  
  function nextImage() {
    console.log(maxPos);
    if (currPos < maxPos - 1) {
      setPos(currPos + 1);
    }
  }

  function prevImage() {
    if (currPos > 0) {
      setPos(currPos - 1);
    }
  }

  return (
    <div className="flex_center col">
      <div className="flex_center col">
        <h1 className="page_heading">Gallery</h1>
      </div>
      <div>
        <ul id="filter" className='text__style_3 flex_center'>
          {filterItems.map((item) => (<li onClick={()=> handleFilter(item.text)} 
          className={item.text == filter ? "active" : ""} key={item.key}> {item.text} </li>))}
        </ul>
      </div>
      <div id="gallery">
        {filteredData.map(item => (
          <img
            key={item.id}
            src={item.img}
            alt={`Image ${item.id}`}
            className={animate ? 'animate' : ''}
            onClick={() => {
              setPos(item.key);
              setModal(true);
            }}
          />
        ))}
      </div>
      {modalOpen && <Modal 
            img={filteredData[currPos].img_hd} 
            closeModal={() => setModal(false)} 
            nextImage={nextImage}
            prevImage={prevImage}
            />}
      </div>
  );
}

export default Gallery;
