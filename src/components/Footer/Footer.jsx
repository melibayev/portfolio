import './Footer.scss';

// ICONS
import { FaLinkedin, FaTelegram, FaGithub  } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-title">
          <p>Have an idea? <span>Let’s talk about it</span></p>
        </div>
        <div className="footer">
          <div className="footer-info">
            <NavLink to={'tel:+998999034072'}><p>+998999034072</p></NavLink>
            <span>Mirzo Ulugbek district, Tashkent, Uzbekistan</span>
          </div>
          <ul className="footer-social-medias">
            <li>
              <NavLink to={'https://www.linkedin.com/in/melibaev-e'} target={'_blank'}>
                <div className="linkedin">
                  <FaLinkedin /><p>Linkedin</p>
                </div>
                </NavLink>
              </li>
            <li>
              <NavLink to={'https://github.com/melibayev'} target={'_blank'}>
                <div className='github'>
                  <FaGithub /><p>GitHub</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={'https://t.me/notjustdev'} target={'_blank'}>
                <div className='telegram'>
                  <FaTelegram /><p>Telegram</p>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-subtitle">
          © 2023 melibaev.uz 
        </div>
      </div>
    </footer>
  )
}

export default Footer