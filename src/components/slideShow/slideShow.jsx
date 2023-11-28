import "./slideShow.css";
import {data} from './mockData.jsx'
import { Link } from "react-router-dom";

const SlideShow = () => {
  return (
    <div className="slide-show">
      <h2>Best Sellers</h2>
      <div className="slide-show-container">
        <div id="slider">
          {data.map(item => (
          <img key={item.id} src={item.img} alt={`Image ${item.id}`} />
        ))}
        </div>
        
      </div>
      <button>
        <Link to="/gallery">View More</Link>
      </button>
    </div>
  )
}

export default SlideShow;
