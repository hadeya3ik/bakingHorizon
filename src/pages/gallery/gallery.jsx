import './gallery.css'
import { cupcakeData, dholkiData, floralData, babyShowerData, charactersData, kidsData, signatureData, data } from './galleryData.jsx' 
import { useState } from 'react';



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

const filterItems_1 = [
  { data: signatureData, text: "signature" },
  { data: babyShowerData, text: "baby showers" },
  { data: floralData, text: "floral" },
  { data: kidsData, text: "kids" }
];

const filterItems_2 = [
  { data: charactersData, text: "characters" },
  { data: dholkiData, text: "dholki" },
  { data: cupcakeData, text: "cupcakes" },
  { data: data, text: "etc" }
];


const Gallery = () => {
  const [filter, setFilter] = useState('signature');
  function handleFilter (new_filter) {
    setFilter(new_filter);
  }

  const filteredData = filterItems.filter((item) => item.text == filter)[0].data;

  return (
    <div className="flex_center col">
      <div className="flex_center col">
        <h className="page_heading">Gallery</h>
      </div>
      <div>
        <ul id="filter" className='text__style_3 flex_center'>
          {/* <div className="filter_top flex_center">
            {filterItems_1.map((item) => (<li onClick={()=>handleFilter(item.text)} 
            className={item.text == filter ? "active" : ""} key={item.data}> {item.text} </li>))}
          </div>
          <div className="filter_bottom flex_center">
            {filterItems_2.map((item) => (<li onClick={()=>handleFilter(item.text)} 
            className={item.text == filter ? "active" : ""} key={item.data}> {item.text} </li>))}
          </div> */}
                  {filterItems.map((item) => (
          <li 
            onClick={() => handleFilter(item.text)}
            className={item.text === filter ? "active" : ""}
            key={item.text} /* Assuming item.text is unique, otherwise use a different unique key */
          >
            {item.text}
          </li>
        ))}
        </ul>
      </div>
      <div id="gallery">
        {filteredData.map(item => (
          <img key={item.id} src={item.img} alt={`Image ${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;