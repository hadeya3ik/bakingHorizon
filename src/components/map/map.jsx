import './map.css'
import mapImg from './map.png'
const Map = () => {
  return (
    <div className='map'>
        <div className="location">
            <h3>We deliver to :</h3>
            <ul>
                <li>Milton</li>
                <li>Mississauga</li>
                <li>Oakville</li>
                <li>Brampton</li>
                <li>Hamilton</li>
                <li>Waterloo</li>
            </ul>
        </div>
        <img src={mapImg}></img>
    </div>
  )
}

export default Map