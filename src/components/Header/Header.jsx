import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import './Header.scss';
import styles from '../../pages/Home/HomeP.module.scss'

const Header = ({ scrollToSection }) => {
  return (
    <header>
        <nav>
            <div className="container">
                <div className="navbar">
                    <div className="navbar-email">
                        <h4>
                            <span><IoMailOutline /></span>
                            <a href={'mailto:melibayefff1@gmail.com'}>melibayefff1@gmail.com</a> 
                        </h4>
                    </div>
                    <ul className="navbar-links">
                        <li className="navbar-link"><Link to={styles.about} smooth={true} duration={1}>About</Link></li>   
                        <li className="navbar-link"><Link to={styles.services} smooth={true} duration={1}>Services</Link></li>   
                        <li className="navbar-link"><Link to={styles.experience} smooth={true} duration={1}>Experience</Link></li>   
                        <li className="navbar-link"><Link to={styles.portfolio} smooth={true} duration={1}>Portfolio</Link></li>   
                        <li className="navbar-link"><Link to={'footer'} smooth={true} duration={1}>Contact</Link></li>   
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)
}

export default Header