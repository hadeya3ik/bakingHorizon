import './contact.css'
import filler from '../../images/cropped.png'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j1psnaa', 'template_9ltupiu', form.current, 'd7OG-IO35Gvd9x2Ie')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="flex_center col">
      <div className="flex_center col">
        <h className="page_heading" >Contact Us</h>
        <p className="contact_info text__style_3">For inquiries, fill up a contact form or email us at</p>
        <p className="text__style_3">bakinghorizon@gmail.com</p>
      </div>
      <div className="box flex_center contact-gallery">
        <div className="gallery-container flex_center">
          <img className="image" src={filler} alt="Cake Image"/>
          <img className="image" src={filler} alt="Cake Image"/>
          <img className="image" src={filler} alt="Cake Image"/>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="text__style_3 flex_center col" action="/submit-form" method="post">
        <input type="text" id="name" name="from_name" placeholder="Name"/>
        <input type="email" id="email" name="reply_to" placeholder="Email" required/>
        <input type="tel" id="phone" name="phone" placeholder="Phone number"/>
        <textarea id="comment" name="message" placeholder="Comment"></textarea>
        <div className="fill"> 
          <button id="submit-button" className="button_style" type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;