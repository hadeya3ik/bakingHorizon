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
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185151.78415131808!2d-80.10724342071906!3d43.52326305353873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6fa34a2371d5%3A0x60f4dd8775707432!2sMilton%2C%20ON!5e0!3m2!1sen!2sca!4v1701277247666!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
  )
}

export default Map