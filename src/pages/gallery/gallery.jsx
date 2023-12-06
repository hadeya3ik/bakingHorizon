import './gallery.css'
import { data } from './galleryData.jsx' 

const Gallery = () => {
  return (
    <div className="flex_center col">
      <div className="flex_center col">
        <h className="page_heading">Gallery</h>
      </div>
      <div>
        <ul className='text__style_3'>
          <li>baby shower's</li>
        </ul>
      </div>
      <div id="gallery">
        {data.map(item => (
        <img key={item.id} src={item.img} alt={`Image ${item.id}`} />
          ))}
      </div>
    </div>
  );
}

export default Gallery;