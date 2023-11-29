import './contact.css'
import filler from './filler.png'
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <h>Contact Us</h>
        <p>Milton, ON.</p>
        <p>bakinghorizon@gmail.com</p>
      </div>

      <div className="contact-gallery">
        <img src={filler} alt="Cake Image"/>
        <img src={filler} alt="Cake Image"/>
        <img src={filler} alt="Cake Image"/>
      </div>
      <div className="contact-header">
        <p>For all custom orders please inquire below and we will get back to you</p>
      </div>
      <form action="/submit-form" method="post">
        <input type="text" id="name" name="name" placeholder="Name"/>
        <input type="email" id="email" name="email" placeholder="Email" required/>
        <input type="tel" id="phone" name="phone" placeholder="Phone number"/>
        <textarea id="comment" name="comment" placeholder="Comment"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;