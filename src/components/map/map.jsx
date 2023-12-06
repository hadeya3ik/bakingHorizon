import './map.css'

const Map = () => {
  return (
    <div className='map flex_center col'>
      <h3>We deliver to :</h3>
      <p>Milton, Mississauga, Oakville, Brampton, Hamilton, Waterloo</p>
      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.722001499113!2d-79.86131438800403!3d43.48727167098993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b658ebeeb08fd%3A0x48f8c8e9017057f0!2s1065%20Bronte%20St.%20S%2C%20Milton%2C%20ON%20L9T%207K6!5e0!3m2!1sen!2sca!4v1701544905673!5m2!1sen!2sca"style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className="overlay"></div>
      </div>
    </div>
  )
}

export default Map