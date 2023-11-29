import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <div className="ig">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram size={18} />
            <div>Instagram</div>
          </a>
        </div>
        <div className="fb">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={18} />
            <div>Facebook</div>
          </a>
        </div>
      </div>
      <div className="powered">
        © 2023 Baking Horizon
      </div>
      <div className="contact-info">
        <div className="email">
          bakinghorizon@gmail.com
        </div>
        <div className="phone">
          416-939-7867
        </div>
      </div>
    </div>
  )
}

export default Footer;
