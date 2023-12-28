import './contact.css'
import filler from '../../images/filler.png'

const Contact = () => {
  return (
    <div className="flex_center col">
      <div className="flex_center col">
        <h className="page_heading" >Contact Us</h>
        <p className="contact_info text__style_3">For in queries, fill up a contact form or email us at</p>
        <p className="text__style_3">bakinghorizon@gmail.com</p>
      </div>
      <div className="box flex_center contact-gallery">
        <div className="gallery-container flex_center">
          <img className="image" src={filler} alt="Cake Image"/>
          <img className="image" src={filler} alt="Cake Image"/>
          <img className="image" src={filler} alt="Cake Image"/>
        </div>
      </div>
      <form className="text__style_3 flex_center col" action="/submit-form" method="post">
        <input type="text" id="name" name="name" placeholder="Name"/>
        <input type="email" id="email" name="email" placeholder="Email" required/>
        <input type="tel" id="phone" name="phone" placeholder="Phone number"/>
        <textarea id="comment" name="comment" placeholder="Comment"></textarea>
        <div className="fill"> 
          <button id="submit-button" className="button_style" type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;