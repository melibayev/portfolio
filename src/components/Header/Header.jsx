import { IoMailOutline } from "react-icons/io5";
import './Header.scss';

const Header = () => {
  return (
    <header>
        <nav>
            <div className="container">
                <div className="navbar">
                    <div className="navbar-email">
                        <h4>
                            <span><IoMailOutline /></span>
                            melibayefff1@gmail.com 
                        </h4>
                    </div>
                    <ul className="navbar-links">
                        <li className="navbar-link">About</li>   
                        <li className="navbar-link">Services</li>   
                        <li className="navbar-link">Portfolio</li>   
                        <li className="navbar-link">Contact</li>   
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)
}

export default Header