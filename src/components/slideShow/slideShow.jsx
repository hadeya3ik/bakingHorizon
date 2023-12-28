import "./slideShow.css";
import {data} from './slideShowData.jsx'
import { Link } from "react-router-dom";

const SlideShow = () => {
  return (
    <div id="slide_show" className="flex_center col standard_padding">
      <h2 className="header__1">Best Sellers</h2>
      <div id="slide_show_container">
        <div id="slider">
          {data.map(item => (
          <img key={item.id} src={item.img} alt={`Image ${item.id}`} />
          ))}
        </div>
      </div>
      <button className="button_style">
        <Link to="/gallery" className='flex_center text__style_2'>View More</Link>
      </button>
    </div>
  )
}

export default SlideShow;
